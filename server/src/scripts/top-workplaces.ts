// I took longer than 90 minutes, but I think I implemented a good solution.
// I welcome any feedback, positive or critical!

/***AI DISCLAIMER***/
// I use Copilot as a conversation partner and always instruct it to NOT show me code or a completed solution.
// I use console.logs, the debugger and documentation to figure out how things work or why they don't work.
// If I'm stuck, I discuss the issue with Copilot and ask for clues.
// Copilot only wrote .vscode/launch.json for me, the rest of the code is mine.

interface WorkPlace {
  id: number;
  name: string;
  status?: 0 | 1 | 2 | undefined;
}

interface Shift {
  id: number;
  createdAt: string;
  startAt: string;
  workplaceId: number;
  workerId: null | number;
  cancelledAt: null | string;
}

interface TopWorkPlace {
  name: string;
  shifts: number;
  status?: 0 | 1 | 2;
}

interface dataObj<T> {
  data: T[];
  links: { next?: string };
}

async function fetchWorkPlaces() {
  // 1. Fetch work places data:
  const workPlacesURL: string = `http://localhost:3000/workplaces`;
  const shiftsURL: string = `http://localhost:3000/shifts`;

  async function fetchData<T>(url: string): Promise<T[]> {
    try {
      const response: Response = await fetch(url);
      const data: dataObj<T> = await response.json();
      //console.log(data);
      let nextURL: string | undefined = data.links.next;
      let pageResponse: Response;
      let pageData: dataObj<T>;
      let allData: T[] = [...data.data];

      while (nextURL) {
        pageResponse = await fetch(nextURL);
        pageData = await pageResponse.json();
        //console.log(pageData.data)
        allData.push(...pageData.data);
        nextURL = pageData.links.next;
      }
      const returnedDataArr: T[] = structuredClone(allData);
      //console.log(returnedData)
      return returnedDataArr;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  const workPlacesData = await fetchData<WorkPlace>(workPlacesURL);
  const shiftsData = await fetchData<Shift>(shiftsURL);
  // console.log("shiftsData: ", shiftsData);
  // console.log("workPlacesData: ", workPlacesData);

  // 2. Iterate over shiftsData to create an array of workplaceIds each time a shift is completed:
  let workplaceIdArr: number[] = [];

  for (let i = 0; i < shiftsData.length; i++) {
    if (shiftsData[i].cancelledAt === null) {
      workplaceIdArr.push(shiftsData[i].workplaceId);
    }
  }

  const sortedWoPlaceIdArr: number[] = structuredClone(
    workplaceIdArr.sort((a: number, b: number) => a - b),
  );
  //console.log(sortedWoPlaceIdArr);

  // 3. Create a temporary array of active work places that includes the number of shifts completed:
  let tempTopWorkPlacesArr: TopWorkPlace[] = [];

  for (let i = 0; i < workPlacesData.length; i++) {
    function shiftCounter(workplaceId: number, arr: number[]) {
      return arr.filter((id) => id === workplaceId).length;
    }

    if (sortedWoPlaceIdArr.includes(workPlacesData[i].id) && workPlacesData[i].status === 0) {
      tempTopWorkPlacesArr.push({
        name: workPlacesData[i].name,
        shifts: shiftCounter(workPlacesData[i].id, sortedWoPlaceIdArr)
        // status: workPlacesData[i].status,
      });
    }
  }
  //console.log(tempTopWorkPlacesArr);

  // 4. Sort tempTopWorkPlacesArr in decreasing order:
  const sortedActiveWorkPlacesArr: TopWorkPlace[] = structuredClone(
    tempTopWorkPlacesArr.sort((a: TopWorkPlace, b: TopWorkPlace) => b.shifts - a.shifts),
  );
  //console.log(activeWorkPlaces)

  // 5. Creat an array of the top 3 work places from sortedActiveWorkPlacesArr:
  const topActiveWorkPlaces = (num: number, arr: TopWorkPlace[]): TopWorkPlace[] => {
    let tempArr: TopWorkPlace[] = [];
    for (let i = 0; i < num; i++) {
      tempArr.push(arr[i]);
    }
    console.log(tempArr);
    return tempArr;
  };

  return topActiveWorkPlaces(3, sortedActiveWorkPlacesArr);
}
fetchWorkPlaces();
