from flask import Flask, render_template, url_for ,request, redirect
import psycopg2
# from dotenv import load_dotenv
import os,random
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from pymongo import MongoClient

client = MongoClient("mongodb+srv://jaykakadiyawork:qvgas0dFxywlnIae@cluster0.wwspsfj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
db = client["GleamGreen"]

# load_dotenv()
# POSTGRES_USER = os.getenv("POSTGRES_USER")
# POSTGRES_PWD = os.getenv("POSTGRES_PWD")
# POSTGRES_HOST = os.getenv("POSTGRES_HOST")
# POSTGRES_PORT = os.getenv("POSTGRES_PORT")

app= Flask(__name__)

def sending_email_mail(to_m, subject_main, html_text):
    try:
        # Create the email
        message = MIMEMultipart()
        message['From'] = "gleamatx@gmail.com"
        message['To'] = to_m
        message['Subject'] = subject_main

        message.attach(MIMEText(html_text, 'html'))

        # Connect to the SMTP server and send the email
        try:
            with smtplib.SMTP("smtp.gmail.com", 587) as server:
                server.starttls()  # Secure the connection
                server.login("gleamatx@gmail.com", "hyxeoqxwlvlsrdal")  # Log in to the server
                print("connected")
                server.sendmail("gleamatx@gmail.com", to_m, message.as_string())  # Send the email
            print('Email sent successfully!')
        except Exception as e:
            print(f'Failed to send email: {e}')

        return "success"

    except Exception as e:
        print(e)
        return "failure"

# def connect_postgres():
#     try:
#         postgres_con = psycopg2.connect(
#             database="postgres",
#             user=POSTGRES_USER,
#             password=POSTGRES_PWD,
#             host=POSTGRES_HOST,
#             port=POSTGRES_PORT
#         )
#         cursor_obj = postgres_con.cursor()
#         print(cursor_obj)
#         return cursor_obj

#     except Exception as e:
#         print(e)


@app.route('/')
def home():
    return render_template('home.html')

@app.route('/appointment')
def appointment():
    return render_template('appointment.html')


@app.route('/education')
def education():
    return render_template('education.html')

def get_category_data(sub_category, category):
    try:
        coll_categoes = db["categories"]
        coll = db["products"]
        categories_all_data = coll_categoes.find({"subcategory_name": sub_category, "category_name": category})
        categories_all_data = list(categories_all_data)
        if categories_all_data:
            content = categories_all_data[0]["content"]
            img_banner = categories_all_data[0]["img_banner"]
        else:
            content = ""
            img_banner = ""
        all_cat = coll_categoes.find({"category_name": category})
        all_cat = list(all_cat)
        all_cat_list = [cat["subcategory_name"] for cat in all_cat]
        if sub_category == "all":
            all_product_data = []
            for cat_name in all_cat_list:
                all_pd_data = coll.find({"subcategory_name": cat_name})
                for pd in all_pd_data:
                    all_product_data.append(pd)
            all_product_data = random.sample(all_product_data, 11)
        elif sub_category.lower() in ['pear', 'oval', 'princess', 'radiant', 'marquise', 'cusion', 'maruise', 'round ', 'asscher',
                                      'round', 'cushion', 'heart', 'emerald', 'marquise']:
            all_pd_data = coll.find({"shape": sub_category})
            all_product_data = []
            without_all_prod = []
            for pd in all_pd_data:
                if pd["subcategory_name"] in all_cat_list:
                    all_product_data.append(pd)
                else:
                    without_all_prod.append(pd)

            if category=="diamonds":
                all_product_data = without_all_prod

            categories_all_data = coll_categoes.find({"subcategory_name": sub_category})
            categories_all_data = list(categories_all_data)
            if categories_all_data:
                content = categories_all_data[0]["content"]
                img_banner = categories_all_data[0]["img_banner"]
        else:
            all_product_data = coll.find({"subcategory_name": sub_category})
            all_product_data = list(all_product_data)

        all_data = []
        for var in all_product_data:
            try:
                image_list = list(var["images"].values())
                image_list = image_list[:2]
                mapping_file = {
                    "product_link": var["product_name"].replace(" ", "_"),
                    "subcategory_name": var["subcategory_name"],
                    "product_name": var["product_name"],
                    "image_list": image_list,
                    "video_list": var["video"],
                    "bgcolor": var["bgcolor"]
                }
                all_data.append(mapping_file)
            except:
                pass

        return content, all_data, img_banner
    except Exception as e:
        print(e)
        
def get_product_whole_data(sub_category, productname):
    try:
        # print("coming in here")
        # print(productname)
        product_data = []
        coll = db["products"]
        # print(sub_category)
        product_checking_name = productname.replace("_", " ")
        if sub_category in ['pear', 'oval', 'princess', 'radiant', 'marquise', 'cusion', 'maruise', 'round ', 'round', 'cushion', 'heart', 'emerald', 'marquise']:
            result = coll.find({"shape": sub_category, "product_name": product_checking_name})
        else:
            if sub_category=="all":
                result = coll.find({"product_name": product_checking_name})
            else:
                result = coll.find({"subcategory_name": sub_category, "product_name": product_checking_name})

        # print(list(result))
        result = list(result)
        try:
            images_urls = list(result[0]["images"].values())
            print(images_urls)
            image_bg_color = result[0]["bgcolor"]["img"]
            video_bg_color = result[0]["bgcolor"]["video"]
            product_data.append('image')
            video_urls = result[0]["video"]
            if video_urls:
                product_data.append("video")

            productname = productname.split("/")[-1]
            product_name = productname.replace("-"," ").replace("_"," ")
        except:
            productname = productname.split("/")[-1]
            product_name = productname.replace("-"," ").replace("_"," ")
        
        return image_bg_color,video_bg_color,product_data,video_urls,images_urls,product_name
    except Exception as e:
        print(e)


# engagement routes start

@app.route('/engagement/<sub_category>/<productname>')
def engagement(sub_category, productname):
    try:
        image_bg_color,video_bg_color,product_data,video_urls,images_urls,product_name = get_product_whole_data(sub_category, productname)
        print(image_bg_color,video_bg_color,product_data,video_urls,images_urls,product_name)
        return render_template('product.html',category="engagement",image_bg_color=image_bg_color,video_bg_color=video_bg_color,product_data=product_data,video_urls=video_urls,images_urls=images_urls,product_name=product_name,sub_category=sub_category)
    except:
        return redirect("/")

@app.route('/engagement/<sub_category>')
def engagement_product(sub_category):
    try:
        content, all_data,img_banner = get_category_data(sub_category, "engagement")
        return render_template('productdisplay.html', category="engagement",img_banner=img_banner, content=content, all_data=all_data, sub_category=sub_category)
    except Exception as e:
        print(e)
        return redirect("/")

# engagement routes end

# wedding routes start

@app.route('/wedding/<sub_category>/<productname>')
def wedding(sub_category, productname):
    try:
        image_bg_color,video_bg_color,product_data,video_urls,images_urls,product_name = get_product_whole_data(sub_category, productname)
        return render_template('product.html',category="wedding",image_bg_color=image_bg_color,video_bg_color=video_bg_color,product_data=product_data,video_urls=video_urls,images_urls=images_urls,product_name=product_name,sub_category=sub_category)
    except:
        return redirect("/")

@app.route('/wedding/<sub_category>')
def wedding_product(sub_category):
    try:
        content, all_data,img_banner = get_category_data(sub_category, "wedding")
        return render_template('productdisplay.html', content=content, category="wedding",img_banner=img_banner, all_data=all_data,sub_category=sub_category)
    except:
        return redirect("/")

@app.route('/diamonds/<sub_category>/<productname>')
def diamonds(sub_category, productname):
    try:
        image_bg_color,video_bg_color,product_data,video_urls,images_urls,product_name = get_product_whole_data(sub_category, productname)
        return render_template('product.html',category="diamonds",image_bg_color=image_bg_color,video_bg_color=video_bg_color,product_data=product_data,video_urls=video_urls,images_urls=images_urls,product_name=product_name,sub_category=sub_category)
    except:
        return redirect("/")

@app.route('/diamonds/<sub_category>')
def diamonds_product(sub_category):
    try:
        content, all_data,img_banner = get_category_data(sub_category, "diamonds")
        return render_template('productdisplay.html', content=content,img_banner=img_banner, category="diamonds", all_data=all_data,sub_category=sub_category)
    except:
        return redirect("/")

# wedding routes end

# jewelry routes start

@app.route('/jewelry/<sub_category>/<productname>')
def jewelry(sub_category, productname):
    try:
        image_bg_color,video_bg_color,product_data,video_urls,images_urls,product_name = get_product_whole_data(sub_category, productname)
        return render_template('product.html',category="jewelry",image_bg_color=image_bg_color,video_bg_color=video_bg_color,product_data=product_data,video_urls=video_urls,images_urls=images_urls,product_name=product_name,sub_category=sub_category)
    except:
        return redirect("/")

@app.route('/jewelry/<sub_category>')
def jewelry_product(sub_category):
    try:
        content, all_data,img_banner = get_category_data(sub_category, "jewelry")
        return render_template('productdisplay.html', content=content,img_banner=img_banner, category="jewelry", all_data=all_data,sub_category=sub_category)
    except:
        return redirect("/")

# jewelry routes end

# Gemstones routes start

@app.route('/gemstones/<sub_category>/<productname>')
def gemstones(sub_category, productname):
    try:
        image_bg_color,video_bg_color,product_data,video_urls,images_urls,product_name = get_product_whole_data(sub_category, productname)
        return render_template('product.html',category="gemstones",image_bg_color=image_bg_color,video_bg_color=video_bg_color,product_data=product_data,video_urls=video_urls,images_urls=images_urls,product_name=product_name,sub_category=sub_category)
    except:
        return redirect("/")

@app.route('/gemstones/<sub_category>')
def gemstones_product(sub_category):
    try:
        content, all_data,img_banner = get_category_data(sub_category, "gemstones")
        return render_template('productdisplay.html', content=content,img_banner=img_banner, category="gemstones", all_data=all_data,sub_category=sub_category)
    except:
        return redirect("/")

# Gemstones routes end

@app.route('/help')
def help():
    return render_template('help.html')

@app.route('/heroes')
def heroes():
    return render_template('heroes.html')

@app.route('/labgrow')
def labgrow():
    return render_template('labgrow.html')

@app.route('/ourmission')
def ourmission():
    return render_template('ourmission.html')

@app.route('/policy')
def policy():
    return render_template('policy.html')

@app.route('/privacypolicy')
def privacypolicy():
    return render_template('privacypolicy.html')

@app.route('/referfriend', methods=["GET", "POST"])
def referfriend():
    if request.method == "POST":
        user_m = request.form.get("user_email")
        refer_m = request.form.get("refer_email")
        admin_m = "harshitgadhiya8980@gmail.com"
        subject_user = "check data"
        refer_user = "check data"
        admin_user = "check data"
        subject_msg = "<h1>Hello there,</h1>"
        refer_msg = "<h1>Hello there,</h1>"
        admin_msg = "<h1>Hello there,</h1>"
        try:
            sending_email_mail(user_m, subject_user, subject_msg)
        except Exception as e:
            print(e)
        try:
            sending_email_mail(refer_m, refer_user, refer_msg)
        except Exception as e:
            print(e)
        try:
            sending_email_mail(admin_m, admin_user, admin_msg)
        except Exception as e:
            print(e)
        return render_template('referfriend.html', message_send = "Your request submit successfully...")
    else:
        return render_template('referfriend.html')

@app.route('/sustainability')
def sustainability():
    return render_template('sustainability.html')

@app.route('/term-condition')
def termcondition():
    return render_template('term-condition.html')

@app.route('/whygreamgreen')
def whygreamgreen():
    return render_template('whygreamgreen.html')

if __name__ == '__main__':
    app.run()
