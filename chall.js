// Technical Challenge Overview:

// Your task is to initiate the development of a Facebook Group Search Tool. The core functionality of this tool will be to identify and list community or town Facebook groups that meet the following criteria. It should be able to take in town name and find all the other towns with an X mile radius. Then report back the following:

// - Located within a X mile radius of X town.
// - For example all groups with in 20 miles radius of Franklin, Massachusetts.
// - The group type should be community or town groups where town members join to learn more about their community.
// - Each group must have over 1,000 members.
// - The groups should be private.
// - excluding any business or buy/sell groups.
// - Here is a link of a bunch of good groups in Massachusetts which you can use to understand what a community group looks like:
// https://docs.google.com/spreadsheets/d/1kLJ84waTCy4mPdMviJZLP3H2C0Q1oPbDCfyCQhkwg5Y/edit?usp=sharing

const groups = [
  {
    id: 1,
    state: "Massachusetts",
    groups: "Wonderful Westminster, MA",
    members: 6500,
    town: "Franklin",
    private: true,
    type: "town",
  },
  {
    id: 2,
    state: "Massachusetts",
    groups: "Attleboro, MA Community Resources Page",
    members: 8900,
    town: "Franklin",
    private: true,
    type: "town",
  },
  {
    id: 3,
    state: "Massachusetts",
    groups: "Wilbraham MA, Open Forum",
    members: 9900,
    town: "Vegas",
    private: true,
    type: "community",
  },
];
