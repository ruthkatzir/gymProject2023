import ServiceForm from './inde';

const StepContent = ({ step }) => {
     switch (step) {
          // case 0:
          // return <ContactForm />;
          case 1:
          return <ServiceForm />;
          case 2:
          return "PAYMENT FORM";
          default:
          return <></>;
     }
}
export default StepContent;