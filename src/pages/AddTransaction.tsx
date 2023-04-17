import Layout from "../components/Layout";
import seta from "../assets/seta.svg";
import { router } from "../main";

export interface ITransaction {
    name: string;
    value: string;
    isNegative: boolean;
    date: number | string;
    accountChosen: string;
    transactionType: string;
}

export function AddTransaction() {
    const transaction: ITransaction = {
        name: "",
        value: "",
        isNegative: false,
        date: 0,
        accountChosen: "",
        transactionType: "",
    };

    function handleSubmitAddTransaction(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // getItem -> variavel(texto)
        const oldTransactionsAsString = localStorage.getItem("transactions");
        // parse -> varoavel(valores)

        if (oldTransactionsAsString === null) {
            const transactionAsString = JSON.stringify([transaction]);
            localStorage.setItem("transactions", transactionAsString);
            router.navigate("/home");
            return;
        }

        const oldTransactions = JSON.parse(oldTransactionsAsString);

        const newTransactions = [...oldTransactions, transaction];

        const newTransactionsAsString = JSON.stringify(newTransactions);

        localStorage.setItem("transactions", newTransactionsAsString);

        router.navigate("/home");
    }

    function handleChangeTransactionName(
        e: React.ChangeEvent<HTMLInputElement>
    ) {
        transaction.name = e.target.value;
    }

    function handleChangeValue(e: React.ChangeEvent<HTMLInputElement>) {
        transaction.value = e.target.value;
    }

    function handleClickNegative() {
        transaction.isNegative = true;
    }

    function handleClickPositive() {
        transaction.isNegative = false;
    }

    function handleChangeDate(e: React.ChangeEvent<HTMLInputElement>) {
        transaction.date = e.target.value;
    }

    function handleChangeAccountChosen(
        e: React.ChangeEvent<HTMLSelectElement>
    ) {
        transaction.accountChosen = e.target.value;
    }

    function handleChangetrasactionType(
        e: React.ChangeEvent<HTMLSelectElement>
    ) {
        transaction.transactionType = e.target.value;
    }

    return (
        <Layout>
            <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans" />
            <body className="h-full">
                <div className="p-8 bg-gray-400 flex flex-row items-center gap-1">
                    <img
                        className="h-10 w-10"
                        // onclick="goToHome()"
                        src={seta}
                        alt="arrow-back"
                    />
                    <h3>Adicionar transação</h3>
                </div>
                <form onSubmit={handleSubmitAddTransaction}>
                    <div className="flex flex-col gap-12 flex-1 px-8 py-8">
                        <div className="flex flex-col text-2xl font-roboto gap-6 ">
                            <label htmlFor="transaction-name">
                                Nome da transação?
                            </label>
                            <input // onkeyup="handleChangeTransactionName(this)"
                                onChange={handleChangeTransactionName}
                                name="transaction-name"
                                id="transaction-name"
                                type="text"
                                placeholder="Economias"
                                className="outline-none border border-gray-300 rounded-md px-3 py-3 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600"
                            />
                        </div>
                        <div className="flex flex-col text-2xl font-roboto gap-6">
                            <label htmlFor="value">Valor</label>
                            <input // onkeyup="handleChangeValue(this)"
                                onChange={handleChangeValue}
                                name="value"
                                id="value"
                                type="text"
                                placeholder="Valor da transação"
                                defaultValue="R$ 0,00"
                                className="outline-none border border-gray-300 rounded-md px-3 py-3 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600"
                            />
                        </div>
                        <div className="flex flex-row self-center gap-10">
                            <button // onclick="handleClickNegative()"
                                onChange={handleClickNegative}
                                type="button"
                                className="text-2xl w-full px-8 py-5 rounded-2xl border-none shadow-2xl max-w-xs font-roboto bg-slate-300"
                            >
                                -R$
                            </button>
                            <button // onclick="handleClickPositive()"
                                onChange={handleClickPositive}
                                type="button"
                                className="text-2xl w-full px-8 py-5 rounded-2xl border-nowne shadow-2xl max-w-xs font-roboto bg-slate-300"
                            >
                                +R$
                            </button>
                        </div>
                        <div className="flex flex-col text-2xl font-roboto gap-6">
                            <label htmlFor="date">Data</label>
                            <input // onchange="handleChangeDate(this)"
                                onChange={handleChangeDate}
                                name="date"
                                id="date"
                                type="date"
                                className="outline-none border border-gray-300 rounded-md px-3 py-3 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600"
                            />
                        </div>
                        <div className="flex flex-col text-2xl font-roboto gap-6">
                            <label>Conta</label>
                            <select // onchange="handleChangeAccountChosen(this)"
                                onChange={handleChangeAccountChosen}
                                name="account-type"
                                id="account-type"
                                className="outline-none border border-gray-300 rounded-md px-3 py-3 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600"
                            >
                                <option selected disabled>
                                    Escolha sua conta
                                </option>
                                <option value="1">Conta 1</option>
                                <option value="2">Conta 2</option>
                                <option value="3">Conta3</option>
                            </select>
                        </div>
                        <div className="flex flex-col text-2xl font-roboto gap-6">
                            <label>Tipo da transação</label>
                            <select // onchange="handleChangetrasactionType(this)"
                                onChange={handleChangetrasactionType}
                                name="transaction-type"
                                id="transaction-type"
                                className="outline-none border border-gray-300 rounded-md px-3 py-3 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600"
                            >
                                <option selected disabled>
                                    Escolha o tipo da sua transação
                                </option>
                                <option value="1">Transporte</option>
                                <option value="2">Lazer</option>
                                <option value="3">Mercado</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-center mb-8 mt-24">
                        <button
                            type="submit"
                            className="text-2xl w-full px-8 py-5 rounded-2xl border-none shadow-2xl max-w-xs font-roboto bg-slate-300"
                        >
                            Adicionar
                        </button>
                    </div>
                </form>
            </body>
        </Layout>
    );
}
