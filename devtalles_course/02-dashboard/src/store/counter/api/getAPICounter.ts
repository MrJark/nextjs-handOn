interface CounterResponse {
  method: string;
  count: number;
}

export const getAPICounter = async (): Promise<CounterResponse> => {
  const data = await fetch("").then((resp) => resp.json());

  return data;
};
