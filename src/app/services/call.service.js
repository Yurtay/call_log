import httpService from "./http.servise";

const userEndpoint = "call/";

const userService = {
  get: async () => {
    const { data } = await httpService.get(userEndpoint);
    return data;
  },
};
export default userService;
