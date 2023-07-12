import { atom, selector } from "recoil"

export const userState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: {
        userName: "andres",
        id: 10,
    }, // default value (aka initial value)
});

export const idState = selector({
    key: 'charCountState', // unique ID (with respect to other atoms/selectors)
    get: async ({ get }) => {
        const getId = get(userState)
        const res = await fetch("https://jsonplaceholder.typicode.com/users/" + getId.id)
        const data = await res.json()
        console.log(data);

        return data.email
    },
});