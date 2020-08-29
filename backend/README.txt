## Getting Started

1. Make sure you have `python` module, if not download it from [here](https://www.python.org/downloads/).
2. Make sure you have `pip` module, if not download it from [here](https://pypi.org/project/pip/)
3. Create a virtual environment using this command `python -m venv <virtualEnvNameOfYourChoice>`.
4. Activate the virtual environment using `source <virtualEnvNameOfYourChoice>/bin/activate`
5. Clone this github directory into the virtual environment created above. 
6. Go to the root directory in the repo `gitjobs` and run this command `pip install -r requirements.txt` to install all the dependencies.
7. Then run `./build.sh' from the same directory.

You are ready to go now.

## Problem Statement

1) Use GitHub job API to extract all job posts and insert into db.
  
- GitHub job API URL ref :- https://jobs.github.com/api
 
2) Create a database (SQLite or any other in-memory database) and store the results.
Expected URL Samples:
- sync_jobs(to fetch job details and store it in db)  :-  /jobs/sync/       [POST]
- list jobs   :-   /jobs/        [GET]
- list jobs with filter   :-   /jobs?location=&quot;xyz&quot;, /jobs?title=&quot;abc&quot;    [GET]
