const year = [
  { year: "2019" },
  { year: "2020" },
  { year: "2021" },
  { year: "2022" },
  { year: "2023" },
  { year: "2024" },
  { year: "2025" },
  { year: "2026" },
  { year: "2027" },
  { year: "2028" },
  { year: "2029" },
];

// export function fetchYear() {
//   return year;
// }

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(year);
    }, 2000);
  });
export default {
  fetchAll,
};
