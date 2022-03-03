import React from "react";
import Title from "../../../Elements/Title/Title";
import { IoIosSchool } from "react-icons/io";
import { MdLockOpen } from "react-icons/md";
import { FaPeopleCarry } from "react-icons/fa";
import { MdOutlineEmojiPeople } from "react-icons/md";

const Mission = () => (
  <section className="mission__container" id="mission__view">
    <Title>MISJA</Title>
    <div className="mission__text__box">
      <p>
        <strong>
          UNIMIND DAO istnieje, aby ułatwić i przyspieszyć karierę w świecie
          Web3 dla każdego.
        </strong>{" "}
        Osiągniemy to poprzez udostępnianie każdemu możliwości pracy w Web3,
        wykorzystując inkluzywne metody organizacyjne DAO, a także poprzez
        tworzenie materiałów edukacyjnych, które mają uczyć ludzi myśleć
        samodzielnie. Dążymy do tego, aby UNIMIND był oczywistym wyborem przy
        starcie kariery jako twórca lub freelancer w świecie Web3, ponieważ
        oferuje najlepsze warunki i wsparcie w Polsce.
      </p>
      <div className="mission__button">
        Dołącz do naszego metaversu na Discord! Najlepsza społeczność web3 w
        Polsce.
      </div>
      <ul className="mission__list">
        <span className="mission__list__title">Wartości:</span>
        <li>
          <strong>
            <span>
              <IoIosSchool />
            </span>
            Edukacja
          </strong>{" "}
          - uczymy tylko faktów, aby każdy mógł wyrobić własną opinię. Stawiamy
          granicę pomiędzy jednymi, a drugimi.
        </li>
        <li>
          <strong>
            <span>
              <MdLockOpen />
            </span>
            Transparencja
          </strong>{" "}
          - nasze rozwiązania techniczne udostępniamy w formule open-source,
          dokumentujemy i dzielimy się ze światem naszymi postępami, a większość
          konwersacji prowadzimy publicznie.
        </li>
        <li>
          <strong>
            <span>
              <MdOutlineEmojiPeople />
            </span>
            Odpowiedzialność
          </strong>{" "}
          - pracujemy w samoorganizujący się sposób, gdzie każdy jest w pełni
          odpowiedzialny za swoje inicjatywy, a każdy pomysł może być
          zrealizowany wtedy i tylko wtedy, jeśli bierze się za niego pełną
          odpowiedzialność.
        </li>
        <li>
          <strong>
            <span>
              <FaPeopleCarry />
            </span>
            Integracja
          </strong>{" "}
          - każdy zainteresowany może wesprzeć UNIMIND i czerpać z tego
          korzyści.
        </li>
      </ul>
    </div>
  </section>
);

export default Mission;
