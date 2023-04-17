import {
    ArrowsRightLeftIcon,
    BanknotesIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import Layout from "../components/Layout";
import plus from "../assets/logoPlus.svg";
import { router } from "../main";
import { IAccount } from "./AddAccount";
import { ITransaction } from "./AddTransaction";

export function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const accountsAsString = localStorage.getItem("accounts");

    if (accountsAsString === null) {
        router.navigate("/add-account");

        return null;
    }

    const accounts: IAccount[] = JSON.parse(accountsAsString);

    const transactionsAsString = localStorage.getItem("transactions");

    if (transactionsAsString === null) {
        router.navigate("/add-transaction");

        return null;
    }

    const transactions: ITransaction[] = JSON.parse(transactionsAsString);

    const transactionTypes = [
        { id: 1, name: "Transporte" },
        { id: 2, name: "Lazer" },
        { id: 2, name: "Mercado" },
    ];
    function getTransactionType(id: number) {
        return transactionTypes.find(
            (transactionType) => transactionType.id === id
        );
    }

    return (
        <Layout>
            <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans" />

            <header id="header" className="bg-cover bg-slate-300 pt-2.5">
                <h1 className="font-roboto text-3xl ml-8 mb-12 mt-5">
                    Contas e cartões
                </h1>
                {accounts.map(({ name, balance }) => (
                    <div className="flex gap-2 5 ml-8">
                        <h2 className="font-roboto text-xl mb-2.5">{name}</h2>
                        <hr className="border-4 border-dotted border-x-0 border-b-0 border-black flex-1 self-center" />
                        <h2 className="font-roboto text-xl mr-2.5">
                            {balance}
                        </h2>
                    </div>
                ))}
            </header>
            <main className="mb-56" id="transactions-list">
                {transactions.map(
                    ({ name, value, transactionType, accountChosen }) => (
                        <div className="mt-8 ml-8 mr-9">
                            <div className="flex">
                                <h1 className="text-6xl">06</h1>
                                <hr className="border-1 border-solid border-x-0 border-b-0 border-black flex-1 self-center ml-2.5" />
                            </div>
                            <h1 className="text-3xl text-slate-400">Nov.</h1>
                            <div className="flex mt-8 mr-8 rounded-full">
                                <div className="bg-gray-300 px-6 py-6 rounded-full ml-0">
                                    <img
                                        className="h-7 w-7 "
                                        src="./vector.svg"
                                        alt="logo-carro"
                                    />
                                </div>
                                <div className="flex-1 mx-8">
                                    <h1 className="text-xl text-slate-500">
                                        {name}
                                    </h1>
                                    <h1>
                                        {
                                            getTransactionType(
                                                Number(transactionType)
                                            )?.name
                                        }
                                    </h1>
                                </div>
                                <div>
                                    <h1>{accountChosen}</h1>
                                    <h1>{value}</h1>
                                </div>
                            </div>
                        </div>
                    )
                )}
            </main>
            <div className="flex flex-col gap-4 fixed bottom-14 right-20">
                {isOpen ? (
                    <>  

                        <button
                            className="bg-gray-300 px-7 py-7 rounded-full flex items-center text-center gap-2"
                            type="button"
                        >
                            <div className="w-9 h-9">
                                <BanknotesIcon />
                            </div>
                            Adicionar conta
                        </button>
                        <button
                            className="bg-gray-300 px-7 py-7 rounded-full flex items-center text-center gap-2"
                            type="button"
                        >
                            <div className="w-9 h-9">
                                <ArrowsRightLeftIcon />
                            </div>
                            Adicionar Transaçao
                        </button>
                    </>
                ) : null}

                <div className="flex justify-end">
                    <button
                        className="bg-gray-300 px-7 py-7 rounded-full transition rotate-45"
                        type="button"
                    >
                        <img
                            className="h-10 w-10 "
                            src={plus}
                            alt="logo-plus"
                        />

                    function handleClick() {
                        setIsOpen(!isOpen);
                    }
                    
                    
                         


                    </button>
                </div>
            </div>
        </Layout>
    );
}
