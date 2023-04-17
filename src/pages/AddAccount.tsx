import Layout from "../components/Layout";
import { router } from "../main";

export interface IAccount {
    name: string;
    type: string;
    balance: string;
    isNegative: boolean;
    id: number | undefined;
}

export function AddAccount() {
    const account: IAccount = {
        name: "",
        type: "",
        balance: "R$ 0,00",
        isNegative: false,
        id: undefined,
    };

    function handleChangeAccountName(e: React.ChangeEvent<HTMLInputElement>) {
        account.name = e.target.value;
    }

    function handleClickAccountType(e: React.ChangeEvent<HTMLSelectElement>) {
        account.type = e.target.value;
    }

    function handleChangeAccountBalance(
        e: React.ChangeEvent<HTMLInputElement>
    ) {
        account.balance = e.target.value;
    }

    function handleClickNegative() {
        account.isNegative = true;
    }

    function handleClickPositive() {
        account.isNegative = false;
    }

    const handleSubmitCreateAccount = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const oldAccountsAsString = localStorage.getItem("accounts");

        if (oldAccountsAsString === null) {
            account.id = 1;
            const AccountAsString = JSON.stringify([account]);
            localStorage.setItem("accounts", AccountAsString);
            router.navigate("/add-transaction");

            return;
        }
        const oldAccounts = JSON.parse(oldAccountsAsString);

        account.id = oldAccounts[oldAccounts.length - 1].id + 1;

        const newAccounts = [...oldAccounts, account];

        const newAccountsAsString = JSON.stringify(newAccounts);

        localStorage.setItem("accounts", newAccountsAsString);

        router.navigate("/add-transaction");
    };

    return (
        <Layout>
            <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans" />

            <body className="h-full text-align: center ">
                <div>
                    <div className="p-8 bg-gray-400 flex flex-row items-center gap-1.5 font-roboto">
                        <h3 className="text-2xl ">Adicionar conta</h3>
                    </div>
                    <form
                        onSubmit={handleSubmitCreateAccount}
                        className="px-8 py-8"
                    >
                        <div className="flex flex-col gap-12 flex-1">
                            <div className="flex flex-col text-2xl font-roboto gap-6 mt-10">
                                <label htmlFor="account-name">
                                    Qual é o nome da conta?
                                </label>
                                <input // onKeyup="handleChangeAccountName(this)"
                                    onChange={handleChangeAccountName}
                                    name="account-name"
                                    id="account-name"
                                    type="text"
                                    placeholder="Economias"
                                    className="outline-none border border-gray-300 rounded-md px-3 py-3 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600"
                                />
                            </div>
                            <div className="flex flex-col text-2xl font-roboto gap-6">
                                <label htmlFor="account-type">
                                    Qual é o tipo da conta?
                                </label>
                                <select // onChange="handleClickAccountType(this)"
                                    onChange={handleClickAccountType}
                                    name="account-type"
                                    id="account-type"
                                    className="outline-none border border-gray-300 rounded-md px-3 py-3 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600"
                                >
                                    <option value="wallet">Carteira</option>
                                    <option value="bank">Banco</option>
                                    <option value="credit">Crédito</option>
                                </select>
                            </div>
                            <div className="flex flex-col text-2xl font-roboto gap-6">
                                <label htmlFor="account-value">
                                    Qual é o saldo atual desta conta?
                                </label>
                                <input // onKeyup="handleChangeAccountBalance(this)"
                                    onChange={handleChangeAccountBalance}
                                    name="account-value"
                                    id="account-value"
                                    type="text"
                                    placeholder="Seu saldo"
                                    defaultValue={account.balance}
                                    className="outline-none border border-gray-300 rounded-md px-3 py-3 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600"
                                />
                            </div>
                            <div className="flex flex-row self-center gap-10">
                                <button
                                    type="button"
                                    // onClick={handleClickLetsGo}
                                    onChange={handleClickNegative}
                                    className="text-2xl w-full px-8 py-5 rounded-2xl border-none shadow-2xl max-w-xs font-roboto bg-slate-300"
                                >
                                    -R$
                                </button>
                                <button // onClick="handleClickPositive()"
                                    onChange={handleClickPositive}
                                    type="button"
                                    className="text-2xl w-full px-8 py-5 rounded-2xl border-none shadow-2xl max-w-xs font-roboto bg-slate-300"
                                >
                                    +R$
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-center mb-8">
                            <button
                                type="submit"
                                className="text-2xl w-full px-6 py-5 rounded-2xl border-none shadow-2xl max-w-xs font-roboto bg-slate-300 mt-20"
                            >
                                Criar conta
                            </button>
                        </div>
                    </form>
                </div>
            </body>
        </Layout>
    );
}
