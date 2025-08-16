
# Coding Challenge Solution

## Overview
This repository contains my solution to the Red Planet Staffing coding challenge. The main objective was to fetch the top 3 currently active Martian workplaces with the most completed shifts using the app's public web API.

## Solution Script
The implementation can be found in [`server/src/scripts/top-workplaces.ts`](server/src/scripts/top-workplaces.ts).


## How to Run
To execute the script and view the results, ensure the client and server applications are running:

For instructions on running the client and server applications, please refer to:
- [Server Setup & Usage](./server/README.md)
- [Client Setup & Usage](./client/README.md)

Then follow these steps:
1. Install dependencies:
	```sh
	npm install
	```
2. Run the script:
	```sh
	npm run start:topWorkplaces
	```

## Expected Output
The script will output the top 3 workplaces in the following format:

```bash
[
	{ name: "Martian Hydro", shifts: 10 },
	{ name: "Luna Greens", shifts: 7 },
	{ name: "Red Diamond Mines", shifts: 6 }
]
```

---

# Red Planet Staffing

Welcome to the red planet! At just over one million people as of the 2050 census, Martian settlements are flourishing. As the leading staffing marketplace on Mars, Red Planet connects workplaces with workers to fill shifts.

![Red Planet Staffing](./assets/red-planet.webp)

## Business context

Our primary customers are Martian workplaces. While they have full-time staff, they occasionally need short-term flexible staff to fill gaps in their operations (for example, when a worker is sick or on a vacation to the Moon).

When they need a worker, workplaces post a "shift" on our marketplace. Workers on our marketplace then claim these shifts and are assigned to them. Once assigned, workers perform the work at the shift's start time until it's end time, and are paid based on the hours worked.

## Documentation

- [Server Setup & Usage](./server/README.md)
- [Client Setup & Usage](./client/README.md)

## Submission

Submit your solution by creating a pull request (PR) on this repository. Please **do not** merge your PR. Instead, return to your Hatchways assessment page to confirm your submission.
