import { useEffect, useState } from 'react';
const useToken = user => {
    const [token, setToken] = useState('');

    useEffect(() => {
        console.log("user inside Token", user);
        const email = user?.user?.email;
        const currentUser = { email: email }
        if (user) {
            fetch(`https://doctor-portal-6063.up.railway.app/user/${email}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('data insided', data);
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken)
                    setToken(accessToken)
                })
        }
    }, [user])
    return [token]
}

export default useToken;