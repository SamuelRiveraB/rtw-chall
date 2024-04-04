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
    lat: 42.082432,
    lon: -71.396721,
  },
  {
    id: 2,
    state: "Massachusetts",
    groups: "Attleboro, MA Community Resources Page",
    members: 8900,
    town: "Close to Franklin",
    private: true,
    type: "town",
    lat: 42.104181,
    lon: -71.429003,
  },
  {
    id: 3,
    state: "Massachusetts",
    groups: "Wilbraham MA, Open Forum",
    members: 9900,
    town: "Vegas",
    private: true,
    type: "community",
    lat: 36.00375, // Fails here (Too far)
    lon: -115.22615,
  },
  {
    id: 4,
    state: "Massachussetts",
    groups: "Wilbraham MA, Open Forum",
    members: 999, // Fails here (Min 1000 members)
    town: "Franklin",
    private: true,
    type: "community",
    lat: 42.082432,
    lon: -71.396721,
  },
  {
    id: 5,
    state: "Massachussetts",
    groups: "Wilbraham MA, Open Forum",
    members: 1000,
    town: "Franklin",
    private: false, // Fails here (Should be private)
    type: "community",
    lat: 42.082432,
    lon: -71.396721,
  },
  {
    id: 6,
    state: "Massachussetts",
    groups: "Wilbraham MA, Open Forum",
    members: 1000,
    town: "Franklin",
    private: true,
    type: "other", // Fails here (Should be either community or town)
    lat: 42.082432,
    lon: -71.396721,
  },
];

function filterGroups(groups, town, radius) {
  const filtered = groups.filter((group) => {
    return (
      // town
      isWithinRadius(group.lat, group.lon, 42.082432, -71.396721, radius) &&
      group.members >= 1000 &&
      group.private &&
      (group.type === "community" || group.type === "town")
    );
  });
  console.log(filtered);
}

function getDistance(lat1, lon1, lat2, lon2) {
  // Haversine formula
  const earthRadius = 6371;
  const lat1Rad = toRadians(lat1);
  const lon1Rad = toRadians(lon1);
  const lat2Rad = toRadians(lat2);
  const lon2Rad = toRadians(lon2);

  const dLat = lat2Rad - lat1Rad;
  const dLon = lon2Rad - lon1Rad;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1Rad) *
      Math.cos(lat2Rad) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = earthRadius * c;

  console.log(distance);

  return distance; // Distance in kilometers
}

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function isWithinRadius(lat1, lon1, lat2, lon2, radius) {
  const distance = getDistance(lat1, lon1, lat2, lon2);
  return distance <= radius;
}

filterGroups(groups, "Franklin", 20);
