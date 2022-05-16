import axios from "axios";

export async function Pollf(id = `61f6c5040330be28cd4a53e3`) {
  try {
    const { data } = await axios.get(`http://survey-workin.herokuapp.com/api/polls/with-questions/${id}`);
    // console.log(data, "main");
    return data;
  } catch (error) {
    console.log(error);
  }
}
