import httpService from "./http.servise";

const reguserEndpoint = "reguser/";

const reguserService = {
  get: async () => {
    const { data } = await httpService.get(reguserEndpoint);
    return data;
  },
  create: async (payload) => {
    console.log("payload", payload);
    const { data } = await httpService.put(
      reguserEndpoint + payload.id,
      payload
    );
    return data;
  },
};
export default reguserService;
