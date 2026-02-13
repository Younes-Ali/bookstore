import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BOOKS_INITIAL = [
    { id: 1, title: "Rich Dad And Poor Dad", author: "Robert T. Kiyosaki", price: 40, asin: "B09TWSRMCB", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut.", img: "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UF1000,1000_QL80_.jpg", qty: 1 },
    { id: 2, title: "Rich Dad And Poor Dad", author: "Robert T. Kiyosaki", price: 40, asin: "B09TWSRMCB", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut.", img: "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UF1000,1000_QL80_.jpg", qty: 1 },
];

function QuantityControl({ qty, onInc, onDec }) {
    return (
        <div className="flex items-center gap-1">
        <button onClick={onDec} className="w-8 h-8 rounded-full border-2 border-pink-200 text-pink-500 hover:bg-pink-50 flex items-center justify-center transition-all">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-4 h-4"><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </button>
        <span className="w-6 text-center font-bold text-gray-800 text-sm">{qty}</span>
        <button onClick={onInc} className="w-8 h-8 rounded-full border-2 border-pink-200 text-pink-500 hover:bg-pink-50 flex items-center justify-center transition-all">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-4 h-4"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </button>
        </div>
    );
}

function FreeShipping() {
    return (
        <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-500 rounded text-xs font-medium">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
        Free Shipping
        </span>
    );
}

export default function WishlistPage() {
    const [wishlistItems, setWishlistItems] = useState(BOOKS_INITIAL);

    const updateQty = (id, delta) =>
        setWishlistItems(prev => prev.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i));

    const removeItem = (id) =>
        setWishlistItems(prev => prev.filter(i => i.id !== id));

    const subtotal = wishlistItems.reduce((s, i) => s + i.price * i.qty, 0);
    const totalQty  = wishlistItems.reduce((s, i) => s + i.qty, 0);

    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 pt-8">


            <div className="grid grid-cols-12 gap-4 px-4 pb-4 border-b border-gray-200">
            <div className="col-span-7 text-sm font-semibold text-gray-500 uppercase tracking-wider">Item</div>
            <div className="col-span-2 text-sm font-semibold text-gray-500 uppercase tracking-wider text-center">Quantity</div>
            <div className="col-span-1 text-sm font-semibold text-gray-500 uppercase tracking-wider text-center">Price</div>
            <div className="col-span-2 text-sm font-semibold text-gray-500 uppercase tracking-wider text-center">Total Price</div>
            </div>


            <div className="space-y-3 mt-3">
            {wishlistItems.length === 0 ? (
                <div className="text-center py-20 text-gray-400">
                <div className="text-6xl mb-4">💔</div>
                <p className="text-xl font-semibold">Your wishlist is empty</p>
                <p className="text-sm mt-2">Save items you love to come back later!</p>
                </div>
            ) : (
                wishlistItems.map(item => (
                <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow overflow-hidden">
                    <div className="grid grid-cols-12 gap-4 p-5 items-center">


                    <div className="col-span-7 flex gap-4">
                        <div className="relative shrink-0">
                        <img src={item.img} alt={item.title} className="w-24 h-32 object-cover rounded-xl shadow-sm" />

                        <button onClick={() => removeItem(item.id)} className="absolute -top-2 -right-2 w-6 h-6 bg-white border-2 border-pink-300 rounded-full flex items-center justify-center text-pink-400 hover:bg-pink-500 hover:text-white transition-all shadow-sm">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                        </button>
                        </div>
                        <div className="flex flex-col justify-center gap-1">
                        <h3 className="font-bold text-gray-800 text-base">{item.title}</h3>
                        <p className="text-xs text-gray-400">Author: <span className="font-semibold text-gray-600">{item.author}</span></p>
                        <p className="text-xs text-gray-400 leading-relaxed mt-1 line-clamp-2">{item.desc}</p>
                        <div className="mt-2"><FreeShipping /></div>
                        <p className="text-xs text-gray-400 mt-1">ASIN : <span className="font-mono">{item.asin}</span></p>
                        </div>
                    </div>

                    <div className="col-span-2 flex justify-center">
                        <QuantityControl qty={item.qty} onInc={() => updateQty(item.id, 1)} onDec={() => updateQty(item.id, -1)} />
                    </div>

                    <div className="col-span-1 text-center">
                        <span className="text-xl font-bold text-gray-800">${item.price}</span>
                    </div>

                    <div className="col-span-2 text-center">
                        <span className="text-xl font-bold text-gray-800">${item.price * item.qty}</span>
                    </div>
                    </div>
                </div>
                ))
            )}
            </div>

            {wishlistItems.length > 0 && (
            <div className="flex items-center justify-center gap-6 mt-8 pb-10">
                <button className="px-6 py-3 border-2 border-pink-400 text-pink-500 font-semibold rounded-xl hover:bg-pink-50 transition-all">
                Move to cart
                </button>

                <button className="bg-pink-600 flex items-center overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all group">
                <div className=" px-5 py-3 border-r border-pink-100">
                    <p className="text-xs  font-medium">{totalQty} Item{totalQty !== 1 ? "s" : ""}</p>
                    <p className="text-lg font-bold ">${subtotal}</p>
                </div>
                <div
                onClick={()=>{
                    navigate('/checkout')
                }} 
                className=" text-white px-6 py-4 flex items-center gap-2 font-bold group-hover:from-pink-600 group-hover:to-rose-600 transition-all">
                    Check out
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </div>
                </button>
            </div>
            )}
        </div>

        <style>{`.line-clamp-2{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}`}</style>
        </div>
    );
}