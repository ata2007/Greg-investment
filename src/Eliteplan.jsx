import React, { useState, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";

function Eliteplan() {
  const [showModal, setShowModal] = useState(false);
  const [depositAmount, setDepositAmount] = useState("");
  const [accountNumber] = useState("9876543210");
  const [invested, setInvested] = useState(0);
  const [target, setTarget] = useState(150000); // 3x ₦50,000 default
  const [startDate, setStartDate] = useState(null);
  const intervalRef = useRef();

  // Simulate investment growth over a month
  useEffect(() => {
    if (showModal && invested < target && startDate && depositAmount) {
      intervalRef.current = setInterval(() => {
        setInvested((prev) => {
          const now = new Date();
          const daysPassed = Math.min(
            30,
            Math.floor((now - new Date(startDate)) / (1000 * 60 * 60 * 24))
          );
          return Math.min(target, (depositAmount * 3 / 30) * daysPassed);
        });
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [showModal, depositAmount, startDate, invested, target]);

  const closeModal = () => {
    setShowModal(false);
    setInvested(0);
    setDepositAmount("");
    setStartDate(null);
    setTarget(150000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (depositAmount && Number(depositAmount) >= 50000) {
      setTarget(Number(depositAmount) * 3);
      setStartDate(new Date());
      setInvested(0);
    }
  };

  const modalRef = useRef();
  useEffect(() => {
    if (showModal) {
      const handleKeyDown = (e) => {
        if (e.key === "Escape") closeModal();
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [showModal]);

  return (
    <>
      <button
        className="w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-teal-400 text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform duration-200 transform-gpu will-change-transform"
        onClick={() => setShowModal(true)}
        type="button"
      >
        Get Started
      </button>

      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-xl border-2 border-yellow-400 shadow-2xl max-w-xs w-full mx-4 p-6 flex flex-col gap-4 items-center"
            onClick={e => e.stopPropagation()}
            ref={modalRef}
            tabIndex={-1}
            aria-modal="true"
            role="alertdialog"
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-yellow-600 text-2xl hover:text-red-500 transition"
              onClick={closeModal}
              aria-label="Close"
              type="button"
            >
              <IoMdClose />
            </button>
            <h3 className="text-xl font-bold text-yellow-700 mb-2 text-center">Elite Plan Investment</h3>
            <div className="w-full flex flex-col gap-3">
              {/* Deposit Form */}
              <div>
                <p className="mb-2 text-yellow-900 text-center">
                  Deposit to <span className="font-semibold">{accountNumber}</span> to activate your investment.
                </p>
                <form className="space-y-2" onSubmit={handleSubmit}>
                  <label className="block text-yellow-700 font-semibold mb-1 text-left text-sm">Deposit Amount (₦)</label>
                  <input
                    type="number"
                    min="50000"
                    className="w-full px-3 py-2 rounded-lg border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    value={depositAmount}
                    onChange={(e) => setDepositAmount(e.target.value)}
                    required
                    disabled={!!startDate}
                  />
                  {!startDate && (
                    <button
                      type="submit"
                      className="w-full py-2 rounded-lg bg-gradient-to-r from-yellow-400 to-teal-400 text-white font-bold text-base shadow hover:scale-105 transition-transform duration-200 transform-gpu will-change-transform"
                    >
                      Start Investment
                    </button>
                  )}
                </form>
              </div>
              {/* Investment Progress */}
              <div className="flex flex-col items-center justify-center">
                <h4 className="font-semibold text-yellow-700 mb-1 text-sm">Progress</h4>
                <div className="w-20 h-20 rounded-full border-4 border-yellow-300 flex items-center justify-center mb-1 relative">
                  <span className="text-base font-bold text-yellow-700">
                    ₦{Math.floor(invested)}
                  </span>
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-xs text-yellow-600">
                    / ₦{target}
                  </span>
                </div>
                <div className="w-full bg-yellow-100 rounded-full h-2 mb-1">
                  <div
                    className="bg-yellow-400 h-2 rounded-full transition-all"
                    style={{
                      width: `${Math.min(100, (invested / target) * 100)}%`,
                    }}
                  ></div>
                </div>
                <span className="text-yellow-700 text-xs text-center">
                  {invested >= target && startDate
                    ? "Target reached!"
                    : startDate
                    ? "Counting up for the month..."
                    : "Enter amount to begin"}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Eliteplan;