import axios from 'axios';
const baseUrl = 'https://kivun-survey-server.herokuapp.com';

export async function getAllPolls() {
  try {
    const res = await axios.get(baseUrl + '/api/polls/');
    console.log('allpolls', res.data);
    return res.data;
  } catch (error) {}
}

export async function addNewPoll(data) {
  try {
    console.log(data);
  } catch (error) {}
}

export function getTags() {
  try {
    const tags = [
      { value: 'לימודים', label: 'לימודים' },
      { value: 'מכללה', label: 'מכללה' },
      { value: 'פול סטאק', label: 'פול סטאק' },
      { value: 'גברים', label: 'גברים' },
      { value: 'נשים', label: 'נשים' },
    ];
    return tags;
  } catch (error) {}
}
export async function createPoll(data) {
  try {
    const res = await axios.post(baseUrl + '/api/polls', data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function updatePollsHeaders(data, pollID) {
  try {
    console.log(data, 'data to send');
    const res = await axios.put(baseUrl + `/api/polls/${pollID}`, data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function saveQuestion(data, pollID) {
  try {
    console.log(data);
    const res = await axios.post(baseUrl + `/api/generals/add-question-to-poll/${pollID}`, data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function updateQuestion(data, questionID) {
  try {
    const res = await axios.put(baseUrl + `/api/questions/${questionID}`, data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getOnePoll(pollID) {
  try {
    const res = await axios.get(baseUrl + `/api/polls/with-questions/${pollID}`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getTemplates() {
  try {
    const res = await axios.get(baseUrl + `/api/questions/templates`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
