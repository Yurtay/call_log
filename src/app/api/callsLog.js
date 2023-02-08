const calls = [
  {
    _id: "1",
    date: "02.02.2023 07:54",
    direction: "Входящий",
    numberOne: "33500",
    numberTwo: "33220",
    duration: "00:00:44",
  },
  {
    _id: "2",
    date: "02.02.2023 07:54",
    direction: "Исходящий",
    numberOne: "33545",
    numberTwo: "33500",
    duration: "00:00:17",
  },
  {
    _id: "3",
    date: "02.02.2023 07:54",
    direction: "Входящий",
    numberOne: "33545",
    numberTwo: "33500",
    duration: "00:01:24",
  },
  {
    _id: "4",
    date: "02.02.2023 18:22",
    direction: "Входящий",
    numberOne: "33474",
    numberTwo: "33220",
    duration: "00:02:32",
  },
];

export function fetchCalls() {
  return calls;
}
