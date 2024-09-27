import { queryDatabase } from "../helpers/db-helpers.js";

export const getAllfeaturesQuery = async (pid) => {
  try {
      return await queryDatabase(`SELECT * FROM features where product_id = ${pid}`);
  } catch (error) {
      console.error("Error fetching features", error);
      throw error;
  }
};

export const addfeatureQuery = async (pid, feature) => {
  try{
    return await queryDatabase(
      `INSERT INTO features(product_id, title, description)
       VALUES (${pid}, '${feature.title}','${feature.description}');`
      );
  }catch (error){
    console.error("Error adding feature", error);
    throw error;
  }
}

export const getfeatureQuery = async (fid, pid) => {
  try{
    return await queryDatabase(`SELECT * from features where id = ${fid} and product_id = ${pid}`);
  }catch (error){
    console.error("Error fetching feature", error);
    throw error;
  }
}

export const updatefeatureQuery = async (feature, fid) => {
  try{
    return await queryDatabase(`UPDATE features
       SET title = '${feature.title}',
       description = '${feature.description}'
       WHERE id = ${fid}`);
  }catch (error){
    console.error("Error updating feature", error);
    throw error;
  }
}

export const deletefeatureQuery = async (fid) => {
  try{
    return await queryDatabase(`DELETE from features
       WHERE id = ${fid}`);
  }catch (error){
    console.error("Error deleting feature", error);
    throw error;
  }
}