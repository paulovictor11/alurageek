import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { MainMenu } from "@/components/MainMenu";
import { Radio } from "@/components/Radio";
import { RaisedButton } from "@/components/RaisedButton";
import { Select } from "@/components/Select";
import { CheckCircle } from "phosphor-react";

function Divider() {
    return <div className="h-px w-full bg-gray-300 rounded-full my-3" />;
}

export default function Checkout() {
    return (
        <>
            <Header leading={<MainMenu />} />

            <main className="my-24 max-w-2xl mx-auto">
                <form className="flex flex-col gap-6">
                    <span className="text-xl text-tertiary font-medium">
                        Contact Information
                    </span>

                    <Input text="Email address" type="email" id="email" />

                    <Divider />

                    <span className="text-xl text-tertiary font-medium">
                        Shipping Information
                    </span>

                    <div className="grid grid-cols-2 gap-4">
                        <Input text="First Name" type="text" id="firstName" />
                        <Input text="Last Name" type="text" id="lastName" />
                    </div>

                    <Input text="Company" type="text" id="company" />
                    <Input text="Address" type="text" id="address" />
                    <Input
                        text="Apartment, suite, etc."
                        type="text"
                        id="complement"
                    />

                    <div className="grid grid-cols-2 gap-4">
                        <Input text="City" type="text" id="city" />
                        <Select
                            id="country"
                            text="Country"
                            items={["Brazil", "Canada", "Japan"]}
                        />
                        <Input text="State / Provincy" type="text" id="state" />
                        <Input text="Postal Code" type="text" id="postalCode" />
                    </div>

                    <Input text="Phone" type="text" id="phone" />

                    <Divider />

                    <span className="text-xl text-tertiary font-medium">
                        Delivery method
                    </span>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg border-2 border-primary p-4 flex flex-col relative cursor-pointer">
                            <span className="font-semibold">Standard</span>
                            <span className="text-zinc-500">
                                4-10 business days
                            </span>

                            <span className="font-medium mt-4">$5.00</span>
                            <CheckCircle
                                size={24}
                                weight="fill"
                                className="text-primary absolute right-4"
                            />
                        </div>
                        <div className="bg-white rounded-lg border-2 p-4 flex flex-col cursor-pointer">
                            <span className="font-semibold">Express</span>
                            <span className="text-zinc-500">
                                2-5 business days
                            </span>

                            <span className="font-medium mt-4">$16.00</span>
                        </div>
                    </div>

                    <Divider />

                    <span className="text-xl text-tertiary font-medium">
                        Payment
                    </span>

                    <div className="flex items-center gap-8">
                        <Radio
                            id="option-1"
                            type="radio"
                            name="paymentType"
                            value="creditCard"
                            label="Credit card"
                        />
                        <Radio
                            id="option-2"
                            type="radio"
                            name="paymentType"
                            value="paypal"
                            label="PayPal"
                        />
                        <Radio
                            id="option-3"
                            type="radio"
                            name="paymentType"
                            value="eTransfer"
                            label="eTransfer"
                        />
                    </div>

                    <Input text="Card number" type="text" id="cardNumber" />
                    <Input text="Name on card" type="text" id="nameOnCard" />

                    <div className="grid grid-cols-4 gap-4">
                        <div className="col-span-3">
                            <Input
                                text="Expiration date (MM/YY)"
                                type="text"
                                id="expirationDate"
                            />
                        </div>
                        <Input text="CVC" type="text" id="cvc" />
                    </div>

                    <Divider />

                    <RaisedButton type="submit">Pay Now</RaisedButton>
                </form>
            </main>

            <Footer />
        </>
    );
}
