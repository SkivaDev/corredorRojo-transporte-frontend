import {
  ArrowDown01,
  CircleDollarSign,
  CloudDownload,
  Search,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { listTransactions } from "../../services/TransactionService";

const Historial = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterButtonActive, setFilterButtonActive] = useState("ALL");
  const [filteredByRecharge, setFilteredByRecharge] = useState([]);
  const [filteredByFare, setFilteredByFare] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    listTransactions().then((data) => {
      console.log(data);
      setTransactions(data);
    });
  }, []);

  useEffect(() => {
    setFilteredTransactions(transactions);
  }, [transactions]);

  // useEffect(() => {

  //     setFilteredTransactions(filteredSearchTransactions);
  // }, [searchTerm]);

  const handleSearch = (value) => {
    setSearchTerm(value);

    console.log(value);

    if (filterButtonActive === "ALL") {

      if (value === "") {
        setFilteredTransactions(transactions);
        return;
      }

      const filteredSearchTransactions = transactions.filter((transaction) =>
        transaction.card.cardNumber.includes(value)
      );
      setFilteredTransactions(filteredSearchTransactions);
    }

    if (filterButtonActive === "RECHARGE") {

      if (value === "") {
        setFilteredTransactions(filteredByRecharge);
        return;
      }

      const filteredSearchTransactions = filteredByRecharge.filter(
        (transaction) => transaction.card.cardNumber.includes(value)
      );
      setFilteredTransactions(filteredSearchTransactions);
    }

    if (filterButtonActive === "FARE") {

      if (value === "") {
        setFilteredTransactions(filteredByFare);
        return;
      }

      const filteredSearchTransactions = filteredByFare.filter(
        (transaction) => transaction.card.cardNumber.includes(value)
      );
      setFilteredTransactions(filteredSearchTransactions);
    }

  };

  const handleFilter = (type) => {
    setFilterButtonActive(type);

    if (type === "ALL") {
      setFilteredTransactions(transactions);
      return;
    }

    const filteredTransactions = transactions.filter(
      (transaction) => transaction.transactionType === type
    );
    setFilteredTransactions(filteredTransactions);

    if (type === "RECHARGE") {
      setFilteredByRecharge(filteredTransactions);
    }

    if (type === "FARE") {
      setFilteredByFare(filteredTransactions);
    }
  };

  return (
    <div className="p-4 mt-16 sm:ml-64 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center w-full mt-3">
        <div className="space-y-2">
          <h1 className="text-[30px] font-bold">Historial de Transacciones</h1>
          <p className="text-[18px] font-medium text-gray-600">
            Revisa tus canjes recientes y recargas de tarjeta
          </p>
        </div>
        <div>
          <button className="flex justify-center items-center gap-1 p-3 border border-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white transition-all duration-200">
            <CloudDownload />
            <p className="font-bold">Descargar todo</p>
          </button>
        </div>
      </div>

      <div className="mt-[40px] ">
        <div className="flex justify-between items-center w-full">
          <div className="border rounded-lg overflow-hidden">
            <button
              type="button"
              className={`${filterButtonActive === "ALL" ? "bg-slate-200" : "" } border px-4 py-2 hover:bg-slate-200`}
              onClick={() => handleFilter("ALL")}
            >
              Ver todo
            </button>
            <button
              type="button"
              className={`${filterButtonActive === "RECHARGE" ? "bg-slate-200" : "" } border px-4 py-2 hover:bg-slate-200`}
              onClick={() => handleFilter("RECHARGE")}
            >
              Recargas
            </button>
            <button
              type="button"
              className={`${filterButtonActive === "FARE" ? "bg-slate-200" : "" } border px-4 py-2 hover:bg-slate-200`}
              onClick={() => handleFilter("FARE")}
            >
              Canjes
            </button>
          </div>
          <div className="flex justify-center items-center gap-2 border px-3 py-2 rounded-lg bg-white max-w-[320px] w-full">
            <span className="">
              <Search size={20} />
            </span>
            <input
              className="w-full outline-0"
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-10">
          {/* tabla */}
          <TransactionTable transactions={filteredTransactions} />
        </div>
      </div>
    </div>
  );
};

const TransactionTable = ({ transactions }) => {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-300">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="flex gap-1 flex-1 justify-start items-center text-left py-3 px-4 uppercase font-semibold text-sm">
              N° Tarjeta
              <span>
                <ArrowDown01 size={20} />
              </span>
            </th>
            <th className="flex-1 text-left py-3 px-4 uppercase font-semibold text-sm">
              Tipo de Transacción
            </th>
            <th className="flex-1 text-left py-3 px-4 uppercase font-semibold text-sm">
              Monto
            </th>
            <th className="flex-1 text-left py-3 px-4 uppercase font-semibold text-sm">
              Fecha
            </th>
          </tr>
        </thead>
        <tbody>
          {transactions.length > 0 ? (
            transactions.map((transaction) => (
              <tr key={transaction.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{transaction.card.cardNumber}</td>
                <td className="py-3 px-4">
                  <div className="flex gap-2 w-min py-1 px-4 rounded-full bg-green-300 text-green-800 font-bold text-[13px]">
                    <CircleDollarSign size={20} />
                    {transaction.transactionType === "RECHARGE"
                      ? "Recarga"
                      : "Canje"}
                  </div>
                </td>
                <td className="py-3 px-4">{transaction.amount}</td>
                <td className="py-3 px-4">
                  {new Date(transaction.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-4">
                No hay transacciones.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Historial;
