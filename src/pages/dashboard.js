import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import { getUsers } from './services'
import { useEffect, useState } from 'react';

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    let fecha;

    useEffect(() =>{
        getUsers().then(
            data => {
              setUsers(data);
            }
          )
      }, []);

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Usuarios
                </h2>
            }>
            <Head>
                <title>Usuarios</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                        <table className="min-w-full text-left text-sm font-light">
                            <thead className="border-b font-medium dark:border-neutral-500">
                                <tr>
                                <th scope="col" className="px-6 py-4">#</th>
                                <th scope="col" className="px-6 py-4">Nombre</th>
                                <th scope="col" className="px-6 py-4">Email</th>
                                <th scope="col" className="px-6 py-4">Fecha creacion</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.length ? (
                                        users.map((item) => {
                                        {
                                            let datosFecha = item.created_at.split("T");
                                            let onlyFecha = datosFecha[0].split("-");
                                            fecha = `${onlyFecha[2]}/${onlyFecha[1]}/${onlyFecha[0]}`

                                        }
                                        return (
                                         <tr key={item.id}
                                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">{item.id}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{item.name}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{item.email}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{fecha}</td>
                                        </tr>
                                        )
                                    })
                                    ):(
                                        <p>Ningun usuario agregado...</p>
                                    )
                                }
                            </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Dashboard
