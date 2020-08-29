import axios from "axios";

class JobService {
  getJobs = (location, title) => {
    let queryString = "";
    if (location && title){
        queryString += "?location=" + location + "&title="+title;
    }else{
        if (location) {
            queryString += "?location=" + location;
          }
          if (title) {
            queryString += "&title=" + title;
          }
    }
    return axios.get(`https://jobs.github.com/positions.json${queryString}`);
    // return axios.get(`http://127.0.0.1:8000/jobs/${queryString}`);
  };
}
export default new JobService();
