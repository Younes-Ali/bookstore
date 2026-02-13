import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BOOKS_INITIAL = [
    { id: 1, title: "Rich Dad And Poor Dad", author: "Robert T. Kiyosaki", price: 40, asin: "B09TWSRMCB", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut.", img: "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UF1000,1000_QL80_.jpg", qty: 1 },
    { id: 2, title: "Rich Dad And Poor Dad", author: "Robert T. Kiyosaki", price: 40, asin: "B09TWSRMCB", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut.", img: "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UF1000,1000_QL80_.jpg", qty: 1 },
    { id: 3, title: "Rich Dad And Poor Dad", author: "Robert T. Kiyosaki", price: 40, asin: "B09TWSRMCB", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut.", img: "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UF1000,1000_QL80_.jpg", qty: 1 },
];

function QuantityControl({ qty, onInc, onDec }) {
    return (
        <div className="flex items-center gap-2">
        <button onClick={onDec} className="w-8 h-8 rounded-full border-2 border-pink-300 text-pink-500 hover:bg-pink-50 flex items-center justify-center transition-all">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-4 h-4"><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </button>
        <span className="w-5 text-center font-semibold text-gray-800 text-sm">{qty}</span>
        <button onClick={onInc} className="w-8 h-8 rounded-full border-2 border-pink-300 text-pink-500 hover:bg-pink-50 flex items-center justify-center transition-all">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-4 h-4"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </button>
        </div>
    );
}

function FreeShipping() {
    return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-500 rounded-lg text-xs font-medium">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
        Free Shipping
        </span>
    );
}

function TrashIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/>
        </svg>
    );
}

export default function CartPage() {
    const [cartItems, setCartItems] = useState(BOOKS_INITIAL);
    const [promoCode, setPromoCode] = useState("");
    const [promoApplied, setPromoApplied] = useState(false);
    const [promoError, setPromoError] = useState(false);
    const navigate = useNavigate();

    const updateQty = (id, delta) =>
        setCartItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i)));

    const removeItem = (id) => setCartItems((prev) => prev.filter((i) => i.id !== id));

    const handleApplyPromo = () => {
        if (promoCode.toUpperCase() === "NE212") { setPromoApplied(true); setPromoError(false); }
        else { setPromoError(true); setPromoApplied(false); }
    };

    const subtotal = cartItems.reduce((s, i) => s + i.price * i.qty, 0);
    const discount = promoApplied ? Math.round(subtotal * 0.25) : 0;
    const tax = 4;
    const total = subtotal - discount + tax;

    return (
        <div className="min-h-screen bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8">

            <div className="hidden md:grid grid-cols-12 gap-4 px-4 pb-5 border-b border-gray-300">
            <div className="col-span-6 text-sm font-semibold text-gray-600 uppercase tracking-wider">Item</div>
            <div className="col-span-2 text-sm font-semibold text-gray-600 uppercase tracking-wider text-center">Quantity</div>
            <div className="col-span-2 text-sm font-semibold text-gray-600 uppercase tracking-wider text-center">Price</div>
            <div className="col-span-2 text-sm font-semibold text-gray-600 uppercase tracking-wider text-center">Total Price</div>
            </div>

            <div className="space-y-4 mt-4">
            {cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">

                <div className="hidden md:grid grid-cols-12 gap-4 p-5 items-center">
                    <div className="col-span-6 flex gap-4">
                    <img src={item.img} alt={item.title} className="w-28 h-36 object-cover rounded-xl shadow-sm shrink-0" />
                    <div className="flex flex-col justify-center gap-1.5">
                        <h3 className="font-bold text-gray-800 text-base leading-snug">{item.title}</h3>
                        <p className="text-xs text-gray-400">Author: <span className="font-semibold text-gray-600">{item.author}</span></p>
                        <p className="text-xs text-gray-400 leading-relaxed mt-0.5 line-clamp-3">{item.desc}</p>
                        <div className="mt-2"><FreeShipping /></div>
                        <p className="text-xs text-gray-400 mt-1">ASIN: <span className="font-mono text-gray-500">{item.asin}</span></p>
                    </div>
                    </div>
                    <div className="col-span-2 flex justify-center">
                    <QuantityControl qty={item.qty} onInc={() => updateQty(item.id, 1)} onDec={() => updateQty(item.id, -1)} />
                    </div>
                    <div className="col-span-2 text-center">
                    <span className="text-xl font-bold text-gray-800">${item.price}</span>
                    </div>
                    <div className="col-span-2 flex items-center justify-center gap-3">
                    <span className="text-xl font-bold text-gray-800">${item.price * item.qty}</span>
                    <button onClick={() => removeItem(item.id)} className="text-pink-300 hover:text-pink-500 transition-colors p-1.5 hover:bg-pink-50 rounded-lg">
                        <TrashIcon />
                    </button>
                    </div>
                </div>

                <div className="md:hidden p-4">
                    <div className="flex gap-3">
                    <img src={item.img} alt={item.title} className="w-20 h-28 object-cover rounded-xl shadow-sm shrink-0" />
                    <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                        <h3 className="font-bold text-gray-800 text-sm leading-snug">{item.title}</h3>
                        <button onClick={() => removeItem(item.id)} className="text-pink-300 hover:text-pink-500 transition-colors p-1 hover:bg-pink-50 rounded-lg shrink-0">
                            <TrashIcon />
                        </button>
                        </div>
                        <p className="text-xs text-gray-400 mt-0.5">Author: <span className="font-semibold text-gray-600">{item.author}</span></p>
                        <p className="text-xs text-gray-400 leading-relaxed mt-1 line-clamp-2">{item.desc}</p>
                        <div className="mt-2"><FreeShipping /></div>
                        <p className="text-xs text-gray-400 mt-1">ASIN: <span className="font-mono">{item.asin}</span></p>
                    </div>
                    </div>
                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                    <QuantityControl qty={item.qty} onInc={() => updateQty(item.id, 1)} onDec={() => updateQty(item.id, -1)} />
                    <div className="flex items-center gap-5">
                        <div className="text-right">
                        <p className="text-xs text-gray-400">Price</p>
                        <p className="text-sm font-bold text-gray-800">${item.price}</p>
                        </div>
                        <div className="text-right">
                        <p className="text-xs text-gray-400">Total</p>
                        <p className="text-sm font-bold text-pink-500">${item.price * item.qty}</p>
                        </div>
                    </div>
                    </div>
                </div>

                </div>
            ))}
            </div>
        </div>

        <div className="max-w-4xl mx-auto mt-8 sm:mt-10 px-4 sm:px-6 pb-10">
            <div className="bg-gray-200 rounded-2xl p-5 sm:p-8">

            <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10">

                <div className="flex flex-col gap-5 pb-6 border-b border-gray-300 md:pb-0 md:border-b-0 md:border-r md:pr-10">
                <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Payment Summary</h2>
                    <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
                    ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.
                    </p>
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-600 mb-2">Have a discount code?</p>
                    <div className="flex gap-2">
                    <div className="flex-1 flex items-center gap-2 bg-transparent border border-gray-900 rounded-xl px-3 py-2.5">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-400 shrink-0">
                        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>
                        </svg>
                        <input
                        type="text" value={promoCode}
                        onChange={(e) => { setPromoCode(e.target.value); setPromoError(false); }}
                        placeholder="Enter Promo Code"
                        className="flex-1 text-sm outline-none text-gray-600 placeholder-gray-400 bg-transparent"
                        />
                    </div>
                    <button onClick={handleApplyPromo} className="px-4 sm:px-5 py-2.5 bg-gray-800 text-white text-sm font-bold rounded-xl hover:bg-gray-700 transition-colors whitespace-nowrap">
                        Apply
                    </button>
                    </div>
                    {promoApplied && (
                    <p className="text-green-600 text-xs mt-1.5 flex items-center gap-1">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><polyline points="20 6 9 17 4 12"/></svg>
                        25% discount applied!
                    </p>
                    )}
                    {promoError && <p className="text-red-500 text-xs mt-1.5">Invalid promo code. Try: NE212</p>}
                </div>
                </div>

                <div className="flex flex-col justify-between gap-6">
                <div className="space-y-4">
                    <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Subtotal</span>
                    <span className="font-semibold text-gray-800">${subtotal}</span>
                    </div>
                    {promoApplied && (
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-green-600">Discount (25%)</span>
                        <span className="font-semibold text-green-600">-${discount}</span>
                    </div>
                    )}
                    <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Shipping</span>
                    <span className="font-semibold text-gray-800">Free Delivery</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Tax</span>
                    <span className="font-semibold text-gray-800">${tax}</span>
                    </div>
                    <div className="flex justify-between items-center pt-3 border-t border-gray-300">
                    <span className="text-base font-bold text-gray-800">Total</span>
                    <span className="text-2xl font-extrabold text-pink-500">${total}</span>
                    </div>
                </div>
                <div className="space-y-3">
                    <button
                    onClick={() => navigate("/checkout")}
                    className="w-full py-3.5 bg-linear-to-r from-pink-500 to-rose-500 text-white font-bold rounded-xl hover:from-pink-600 hover:to-rose-600 transition-all shadow-md hover:shadow-lg active:scale-95"
                    >
                    Check out
                    </button>
                    <button
                    onClick={() => navigate("/books")}
                    className="w-full py-3.5 bg-white border-2 border-pink-400 text-pink-500 font-bold rounded-xl hover:bg-pink-50 transition-all active:scale-95"
                    >
                    Keep Shopping
                    </button>
                </div>
                </div>

            </div>
            </div>
        </div>

        <style>{`.line-clamp-2{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.line-clamp-3{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}`}</style>
        </div>
    );
}