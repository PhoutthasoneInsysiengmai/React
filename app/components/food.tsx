"use client";

type FoodProps = {
    food: { id: number, name: string, price: number };
    onAddToCart: (food: { id: number, name: string, price: number }) => void;
};

export default function Food({ food, onAddToCart }: FoodProps) {
    return (
        <div className="border p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{food.name}</h2>
            <p className="text-gray-500">Price: ${food.price.toFixed(2)}</p>
            <button
                className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md w-full"
                onClick={() => onAddToCart(food)}
            >
                Add to Cart
            </button>
        </div>
    );
}