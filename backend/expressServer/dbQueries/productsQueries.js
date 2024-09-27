import { queryDatabase } from "../helpers/db-helpers.js";

export const getAllProductsQuery = async (tenantId) => {
  try {
      return await queryDatabase(`SELECT * FROM products where tenant_id = ${tenantId}`);
  } catch (error) {
      console.error("Error fetching products", error);
      throw error;
  }
};

export const addProductQuery = async (tenantId, product) => {
  try{
    return await queryDatabase(
      `INSERT INTO products(tenant_id, title, description)
       VALUES (${tenantId}, '${product.title}','${product.description}');`
      );
  }catch (error){
    console.error("Error adding product", error);
    throw error;
  }
}

export const getProductQuery = async (tid, pid) => {
  try{
    return await queryDatabase(`SELECT * from products where id = ${pid} and tenant_id = ${tid}`);
  }catch (error){
    console.error("Error fetching product", error);
    throw error;
  }
}

export const updateProductQuery = async (product, pid) => {
  try{
    return await queryDatabase(`UPDATE products
       SET title = '${product.title}',
       description = '${product.description}'
       WHERE id = ${pid}`);
  }catch (error){
    console.error("Error updating product", error);
    throw error;
  }
}

export const deleteProductQuery = async (pid) => {
  try{
    return await queryDatabase(`DELETE from products
       WHERE id = ${pid}`);
  }catch (error){
    console.error("Error deleting product", error);
    throw error;
  }
}