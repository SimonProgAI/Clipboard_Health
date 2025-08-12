# Coding Challenge
Here is my solution to the coding challenge:
[Top Workplaces Script](server/src/scripts/top-workplaces.ts)

I was asked to build a way to fetch the top 3 workplaces from a running app in production. More specifically, the currently active workplaces with the most shifts completed. 

You can run this script by running `npm run start:topWorkplaces` in the root directory.

My task was to implement this script using the existing public web API for the app.

The output of the script after running `npm run start:topWorkplaces` should be formatted like
so:

```bash
[
 { name: "Martian Hydro", shifts: 10 },
 { name: "Luna Greens", shifts: 7 },
 { name: "Red Diamond Mines", shifts: 6 }
]
```

# Red Planet Staffing

Welcome to the red planet! At just over one million people as of the 2050 census, Martian settlements are flourishing. As the leading staffing marketplace on Mars, Red Planet connects workplaces with workers to fill shifts.

![Red Planet Staffing](./assets/red-planet.webp)

## Business context

Our primary customers are Martian workplaces. While they have full-time staff, they occasionally need short-term flexible staff to fill gaps in their operations (for example, when a worker is sick or on a vacation to the Moon).

When they need a worker, workplaces post a "shift" on our marketplace. Workers on our marketplace then claim these shifts and are assigned to them. Once assigned, workers perform the work at the shift's start time until it's end time, and are paid based on the hours worked.

## Documentation

- [Server](./server/README.md)
- [Client](./client/README.md)

## Submission

Submit your solution by creating a pull request (PR) on this repository. Please **do not** merge your PR. Instead, return to your Hatchways assessment page to confirm your submission.
