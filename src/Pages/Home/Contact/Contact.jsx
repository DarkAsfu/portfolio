import "@lottiefiles/lottie-player";
import Heading from "../../../components/heading";
import ContactForm from "../ContactForm/ContactForm";
const Contact = () => {
    return (
        <div id="contact" className="w-11/12 mx-auto md:grid grid-cols-2 items-center py-10">
            <div data-aos="flip-right">
                <lottie-player
                    autoplay
                    loop
                    mode="normal"
                    src="https://assets9.lottiefiles.com/packages/lf20_8tmvgkde.json"
                    style={{ width: "100%" }}
                >
                </lottie-player>
            </div>
            <div data-aos="flip-left">
                <div>
                    <div className="flex">
                        <Heading title="Contact with me"></Heading>
                    </div>
                    <ContactForm></ContactForm>
                </div>
            </div>
        </div>
    );
};

export default Contact;