import Layout from "../components/Layout";
import money from "../assets/money.svg";
import { router } from "../main";

export function InitialPage() {
    const handleClickLetsGo = () => {
        router.navigate("/add-account");
    };

    return (
        <Layout>
            <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans" />

            <body className="h-full mt-48">
                <div className="flex flex-col h-full px-8 py-8">
                    <div className="flex flex-1">
                        <div className="flex justify-center mb-8 flex-col w-full">
                            <div className="flex justify-center mb-8">
                                <img src={money} alt="dollar sign" />
                            </div>
                            <h2 className="flex justify-center">Bem vindo!</h2>
                            <p className="flex justify-center mt-5 text-align: center;">
                                Que tal começar criando suas contas, assim você
                                pode começar a registrar suas finanças.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center mb-8">
                        <button
                            type="button"
                            onClick={handleClickLetsGo}
                            className="text-2xl w-full px-8 py-5 rounded-2xl border-none shadow-2xl max-w-xs font-roboto bg-slate-300 mt-20"
                        >
                            Vamos lá
                        </button>
                    </div>
                </div>
            </body>
        </Layout>
    );
}
