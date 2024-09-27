import { queryDatabase } from "../helpers/db-helpers.js";

export const getAllTestsScenariosOfProductQuery = async (pid) => {
  try {
      return await queryDatabase(`SELECT * FROM tests_scenarios where pid = ${pid}`);
  } catch (error) {
      console.error("Error fetching tests", error);
      throw error;
  }
};

export const getAllTestsScenariosOfFeatureQuery = async (fid) => {
  try {
      return await queryDatabase(`SELECT * FROM tests_scenarios where fid = ${fid}`);
  } catch (error) {
      console.error("Error fetching tests", error);
      throw error;
  }
};

export const addTestScenarioQuery = async (fid, test) => {
  try{
    console.log("*********", test.test_steps);
    test.test_steps = JSON.stringify(test.test_steps).replace('[', '{');
    test.test_steps = test.test_steps.replace(']', '}');
    return await queryDatabase(
      `INSERT INTO tests_scenarios(fid, scenario, pre_requisite, test_steps, expected_output, pid, git_action_link)
       VALUES (${fid}, '${test.scenario}', '${test.pre_requisite}', '${test.test_steps}','${test.expected_output}', ${test.pid}, ${test.git_action_link} );`
      );
  }catch (error){
    console.error("Error adding test scenario", error);
    throw error;
  }
}

export const getTestScenarioQuery = async (tid) => {
  try{
    return await queryDatabase(`SELECT * from tests_scenarios where id = ${tid}`);
  }catch (error){
    console.error("Error fetching Test", error);
    throw error;
  }
}

export const updateTestScenarioQuery = async (test, tid) => {
  try{
    return await queryDatabase(`UPDATE tests_scenarios
       SET scenario = '${test.scenario}',
       test_steps = '${test.test_steps}',
       expected_output = '${test.expected_output}',
       git_action_link = '${test.git_action_link}'
       WHERE id = ${tid}`);
  }catch (error){
    console.error("Error updating test", error);
    throw error;
  }
}

export const deleteTestScenarioQuery = async (tid) => {
  try{
    return await queryDatabase(`DELETE from tests_scenarios
       WHERE id = ${tid}`);
  }catch (error){
    console.error("Error deleting test", error);
    throw error;
  }
}