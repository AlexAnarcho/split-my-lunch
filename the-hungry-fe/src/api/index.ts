import axios from "axios"

export const getNewInvoice = async (user: string, label: string) => {
  const { data, status } = await axios.post(`http://127.0.0.1:4000/monero/create/${user}`, { user, label })
  if (status !== 200) throw new Error(`Error happend creating invoice`)
  return data
}

