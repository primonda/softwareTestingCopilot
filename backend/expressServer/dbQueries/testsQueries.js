import { queryDatabase } from "../helpers/db-helpers.js";

export const getAllTestsOfProductQuery = async (pid) => {
  try {
      return await queryDatabase(`SELECT * FROM tests where pid = ${pid}`);
  } catch (error) {
      console.error("Error fetching tests", error);
      throw error;
  }
};

export const getAllTestsOfFeatureQuery = async (fid) => {
  try {
      return await queryDatabase(`SELECT * FROM tests where fid = ${fid}`);
  } catch (error) {
      console.error("Error fetching tests", error);
      throw error;
  }
};

export const addTestQuery = async (fid, test) => {
  try{
    return await queryDatabase(
      `INSERT INTO tests(pid, fid, git_action_link, title, description)
       VALUES (${test.pid}, ${fid}, '${test.git_action_link}', '${test.title}','${test.description}');`
      );
  }catch (error){
    console.error("Error adding test", error);
    throw error;
  }
}

export const getTestQuery = async (tid) => {
  try{
    return await queryDatabase(`SELECT * from tests where id = ${tid}`);
  }catch (error){
    console.error("Error fetching Test", error);
    throw error;
  }
}

export const updateTestQuery = async (test, tid) => {
  try{
    return await queryDatabase(`UPDATE tests
       SET title = '${test.title}',
       description = '${test.description}',
       git_action_link = '${test.git_action_link}'
       WHERE id = ${tid}`);
  }catch (error){
    console.error("Error updating test", error);
    throw error;
  }
}

export const deleteTestQuery = async (tid) => {
  try{
    return await queryDatabase(`DELETE from tests
       WHERE id = ${tid}`);
  }catch (error){
    console.error("Error deleting test", error);
    throw error;
  }
}