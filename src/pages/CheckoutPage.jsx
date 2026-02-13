import { useState } from "react";

const CART_INITIAL = [
  { id: 1, title: "Rich Dad And Poor Dad", author: "Robert T. Kiyosaki", price: 40, img: "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UF1000,1000_QL80_.jpg", qty: 1 },
  { id: 2, title: "Rich Dad And Poor Dad", author: "Robert T. Kiyosaki", price: 40, img: "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UF1000,1000_QL80_.jpg", qty: 1 },
];

function QuantityControl({ qty, onInc, onDec }) {
  return (
    <div className="flex items-center gap-1">
      <button onClick={onDec} className="w-7 h-7 rounded-full border-2 border-pink-200 text-pink-500 hover:bg-pink-50 flex items-center justify-center transition-all">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-3 h-3"><line x1="5" y1="12" x2="19" y2="12"/></svg>
      </button>
      <span className="w-5 text-center font-bold text-gray-800 text-sm">{qty}</span>
      <button onClick={onInc} className="w-7 h-7 rounded-full border-2 border-pink-200 text-pink-500 hover:bg-pink-50 flex items-center justify-center transition-all">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-3 h-3"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      </button>
    </div>
  );
}

function FreeShipping() {
  return (
    <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-500 rounded text-xs font-medium">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
      Free Shipping
    </span>
  );
}

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState(CART_INITIAL);
  const [form, setForm] = useState({ name: "John Smith", phone: "123456789", email: "Johnsmith@gmail.com", city: "Maadi", state: "Cairo", zip: "11311", address: "Maadi, Cairo, Egypt." });
  const [payMethod, setPayMethod] = useState("cash");
  const [note, setNote] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const subtotal = cartItems.reduce((s, i) => s + i.price * i.qty, 0);
  const tax = 4;
  const discount = promoApplied ? Math.round(subtotal * 0.25) : 0;
  const total = subtotal + tax - discount;

  const updateQty = (id, delta) =>
    setCartItems(prev => prev.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i));

  const handleApplyPromo = () => {
    if (promoCode.toUpperCase() === "NE212") {
      setPromoApplied(true);
      setPromoError(false);
    } else {
      setPromoError(true);
      setPromoApplied(false);
    }
  };

  const handleConfirm = () => {
    if (!form.name || !form.phone || !form.email || !form.address) {
      alert("Please fill in all required fields");
      return;
    }
    setConfirmed(true);
  };
  if (confirmed) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-3xl shadow-xl p-12 text-center max-w-md w-full">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Order Confirmed! 🎉</h2>
          <p className="text-gray-500 mb-1">Thank you, <strong>{form.name}</strong>!</p>
          <p className="text-gray-400 text-sm mb-6">Your order of <strong className="text-pink-500">${total}</strong> has been placed successfully.</p>
          <button onClick={() => { setConfirmed(false); setCartItems(CART_INITIAL); }} className="w-full py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold rounded-xl hover:from-pink-600 hover:to-rose-600 transition-all shadow-md">
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-5 gap-6">

          <div className="col-span-3 space-y-5">

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-5">Shipping information</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  ["name",  "Name",  "John Smith"],
                  ["phone", "Phone", "123456789"],
                  ["email", "Email", "Johnsmith@gmail.com"],
                  ["city",  "City",  "Maadi"],
                  ["state", "State", "Cairo"],
                  ["zip",   "Zip",   "11311"],
                ].map(([key, label, placeholder]) => (
                  <div key={key}>
                    <label className="block text-xs font-medium text-gray-500 mb-1">{label}</label>
                    <input
                      type="text"
                      value={form[key]}
                      placeholder={placeholder}
                      onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-400 transition-all"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <label className="block text-xs font-medium text-gray-500 mb-1">Address</label>
                <input
                  type="text"
                  value={form.address}
                  onChange={e => setForm(f => ({ ...f, address: e.target.value }))}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-400 transition-all"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Payment Method</h2>
              <div className="flex flex-wrap gap-3">
                {[
                  ["online", "Online payment"],
                  ["cash",   "Cash on delivery"],
                  ["pos",    "POS on delivery"],
                ].map(([val, label]) => (
                  <button
                    key={val}
                    onClick={() => setPayMethod(val)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 text-sm font-medium transition-all ${payMethod === val ? "border-pink-400 bg-pink-50 text-pink-600" : "border-gray-200 text-gray-500 hover:border-gray-300 bg-white"}`}
                  >
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${payMethod === val ? "border-pink-500" : "border-gray-300"}`}>
                      {payMethod === val && <div className="w-2 h-2 rounded-full bg-pink-500" />}
                    </div>
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Note</h2>
              <textarea
                value={note}
                onChange={e => setNote(e.target.value)}
                placeholder="✏  Add note"
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-600 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-400 resize-none transition-all"
              />
            </div>
          </div>
          <div className="col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-6">
              <h2 className="text-lg font-bold text-gray-800 mb-5">Order summary</h2>

              <div className="space-y-4 max-h-56 overflow-y-auto pr-1">
                {cartItems.map(item => (
                  <div key={item.id} className="flex gap-3">
                    <img src={item.img} alt={item.title} className="w-14 h-20 object-cover rounded-xl shadow-sm flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-gray-800 leading-tight">{item.title}</h4>
                      <p className="text-xs text-gray-400 mt-0.5">Author: <span className="font-semibold text-gray-600">{item.author}</span></p>
                      <div className="mt-1.5"><FreeShipping /></div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-base font-bold text-gray-800">${item.price}</span>
                        <QuantityControl qty={item.qty} onInc={() => updateQty(item.id, 1)} onDec={() => updateQty(item.id, -1)} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 mt-5 pt-5 space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-2">Have a discount code?</p>
                  <div className="flex gap-2">
                    <div className="flex-1 flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-400 flex-shrink-0"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
                      <input
                        type="text"
                        value={promoCode}
                        onChange={e => { setPromoCode(e.target.value); setPromoError(false); }}
                        placeholder="Enter Promo Code"
                        className="flex-1 text-sm outline-none text-gray-600 placeholder-gray-300"
                      />
                    </div>
                    <button onClick={handleApplyPromo} className="px-4 py-2 bg-gray-800 text-white text-sm font-bold rounded-xl hover:bg-gray-700 transition-colors whitespace-nowrap">
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

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-500">
                    <span>Subtotal</span>
                    <span className="font-medium text-gray-700">${subtotal}</span>
                  </div>
                  {promoApplied && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount (25%)</span>
                      <span>-${discount}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-gray-500">
                    <span>Tax</span>
                    <span className="font-medium text-gray-700">${tax}</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>Shipping</span>
                    <span className="font-medium text-gray-700">$0</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                    <span className="text-base font-bold text-gray-800">Total (USD)</span>
                    <span className="text-xl font-bold text-pink-500">${total}</span>
                  </div>
                </div>

                <button
                  onClick={handleConfirm}
                  className="w-full py-3.5 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold rounded-xl hover:from-pink-600 hover:to-rose-600 transition-all shadow-md hover:shadow-lg active:scale-95"
                >
                  Confirm order
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}