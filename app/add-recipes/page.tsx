"use client"

import { useForm } from "react-hook-form";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { app } from "../lib/firebase";
import { useState } from "react";

type FormData = {
    name: string;
    address: string;
    tel: string;
}

export default function AddRecipes() {
    const db = getFirestore(app);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm<FormData>();

    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const onSubmit = async (data: FormData) => {
        try {
            await addDoc(collection(db, 'Foods'), data);
            setMessage('Recipes added');
            reset();

        } catch (error) {
            setError('Error adding recipes');
            console.log(error)
        }
    }
    return (
        <div className="text-center mt-10">
            <h1>Add a Recipes</h1>
            {message &&
                <p className="text-green-900 bg-green-100 p-4 rounded">
                    {message}
                </p>
            }
            {error &&
                <p className="text-red-900 bg-red-100 p-4 rounded">
                    {error}
                </p>
            }
            <form onSubmit={handleSubmit(onSubmit)} className="mt-10  ">
                <div className="mb-4">
                    <label>Recipes Name</label>
                    <input className="border-2 border-blue-500 rounded px-3 ml-3"
                        {
                        ...register
                            (
                                "name",
                                { required: "ກະລຸນາປ້ອນຊື່ສູດອາຫານ" }
                            )
                        }
                    />
                    {errors.name &&
                        <p className="text-red-500">
                            {errors.name.message}
                        </p>
                    }
                </div>
                <div className="mb-4 ml-2">
                    <label>address</label>
                    <input className="border-2 border-blue-500 rounded px-3 ml-3"
                        {
                        ...register
                            (
                                "address",
                                { required: "ກະລຸນາປ້ອນທີ່ມາຂອງສູດອາຫານ" }
                            )
                        }
                    />
                    {errors.address &&
                        <p className="text-red-500">
                            {errors.address.message}
                        </p>
                    }
                </div>
                <div className="mb-4 ml-2">
                    <label>Tel</label>
                    <input className="border-2 border-blue-500 rounded px-3 ml-3"
                        {
                        ...register
                            (
                                "tel",
                                { required: "ປ້ອນເບີໂທເພື່ອໄວ້ຕິດຕໍ່" }
                            )
                        }
                    />
                    {errors.tel &&
                        <p className="text-red-500">
                            {errors.tel.message}
                        </p>
                    }
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-green-600 text-white px-3 py-1 rounded text-center"
                >
                    {isSubmitting ? "Saving..." : "Add Recipes"}
                </button>
            </form>
        </div>
    );
}