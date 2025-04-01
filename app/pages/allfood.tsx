"use client";

import { useState } from "react";
import Cart from "../components/cart";
import Food from "../components/food";

type FoodItem = {
    id: number;
    name: string;
    price: number;
};

type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
};

const Foods: FoodItem[] = [
    { id: 1, name: "Pizza", price: 10 },
    { id: 2, name: "Burger", price: 5 },
    { id: 3, name: "Pasta", price: 8 },
    { id: 4, name: "Donut", price: 2 },
    { id: 5, name: "Ice Cream", price: 3 },
    { id: 6, name: "Coffee", price: 4 },
];

export default function AllFood() {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const handleAddToCart = (food: FoodItem) => {
        setCartItems((prev) => {
            const existingItem = prev.find((item) => item.id === food.id);
            if (existingItem) {
                return prev.map((item) =>
                    item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...food, quantity: 1 }];
        });
    };

    const handleRemoveFromCart = (id: number) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <div className="flex gap-8 p-8">
            <div className="w-2/3">
                <h1 className="text-2xl font-bold mb-4">Products</h1>
                <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-2 sm:grid-cols-1">
                    {Foods.map((food) => (
                        <Food key={food.id} food={food} onAddToCart={handleAddToCart}/>
                    ))}
                </div>
            </div>
            <div>
                <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
            </div>
        </div>
    );
}