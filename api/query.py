import psycopg2
import os
import pandas as pd

df = pd.read_csv("productdb.csv")
new_list = [var.lower() for var in list(set(list(df["Shape "])))]
print(new_list)

# POSTGRES_USER = os.getenv("POSTGRES_USER")
# POSTGRES_PWD = os.getenv("POSTGRES_PWD")
# POSTGRES_HOST = os.getenv("POSTGRES_HOST")
# POSTGRES_PORT = os.getenv("POSTGRES_PORT")

# # Step 1: Connect to PostgreSQL
# conn = psycopg2.connect(
#             database="postgres",
#             user=POSTGRES_USER,
#             password=POSTGRES_PWD,
#             host=POSTGRES_HOST,
#             port=POSTGRES_PORT
#         )

# cur = conn.cursor()

# # # Step 2: Add a new column
# table_name = "products"
# new_column_name = "shape"
# # new_column_type = "VARCHAR(255)"  # Adjust the data type as needed

# # add_column_query = f"ALTER TABLE {table_name} ADD COLUMN {new_column_name} {new_column_type};"
# # cur.execute(add_column_query)
# # conn.commit()

# # Step 3: Update the new column with data based on specific conditions
# for id,product_name,shape in zip(df["id"],df["product_name"],df["Shape "]):
#     print(id,product_name,shape)
#     update_query = f"UPDATE {table_name} SET {new_column_name} = '{shape}' WHERE id = {id} and product_name='{product_name}';"
#     cur.execute(update_query)
#     conn.commit()

# # Step 4: Close the connection
# cur.close()
# conn.close()

# print("Column added and data updated successfully.")
