const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL

export const getUsers = () => {
    return fetch(baseUrl+'/api/v1/users', { // add return here
                  method:'Get',
              })
              .then(data=> {
               return   data.json()
              })
};

