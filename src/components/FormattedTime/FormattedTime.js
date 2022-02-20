import styles from './FormattedTime.module.scss';

const FormattedTime = props => {
      const hours = ("0" + Math.floor(props.time / 3600000) % 24).slice(-2);
      const minutes = ("0" + Math.floor(props.time / 60000) % 60).slice(-2);
      const seconds = ("0" + Math.floor(props.time / 1000) % 60).slice(-2);
      const milisec = ("0" + (props.time) % 100).slice(-2);

  return (
    <div>
       <span>{hours+":"+minutes+":"+seconds+"."+milisec}</span>
    </div>
  );

};

export default FormattedTime;
