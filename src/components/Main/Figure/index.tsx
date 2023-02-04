import ilustration_img from "../../../assets/ilustration.svg";
import "./styles.scss";

export function Figure() {
    return (
        <figure className="Figure">
            <img className="Figure__image" src={ilustration_img} alt="Ilustration" />
            <figcaption className="Figure__title">No tasks at the moment</figcaption>
        </figure>
    );
}
