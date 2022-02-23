
const FormattedTime = ({ time }) => {
      const hours = ("0" + Math.floor(time / 3600000) % 24).slice(-2);
      const minutes = ("0" + Math.floor(time / 60000) % 60).slice(-2);
      const seconds = ("0" + Math.floor(time / 1000) % 60).slice(-2);
      const milisec = ("0" + (time) % 100).slice(-2);

  return (
    <div>
       <span>{hours+":"+minutes+":"+seconds+"."+milisec}</span>
    </div>
  );

};

export default FormattedTime;
