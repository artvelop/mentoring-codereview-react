import { FaRegStar } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa6';
import { IoTicketSharp } from 'react-icons/io5';

interface OnClickIconType {
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}

export const NotFillStarIcon = ({ onClick }: OnClickIconType) => (
  <FaRegStar size={'25'} onClick={onClick} color="#FB9B00" />
); // 별빈거

export const FillStarIcon = ({ onClick }: OnClickIconType) => (
  <FaStar size={'25'} onClick={onClick} color="#FB9B00" />
); // 별채운거

export const TicketIcon = ({ onClick }: OnClickIconType) => (
  <IoTicketSharp size={'25'} onClick={onClick} color="#FB9B00" />
); // 별채운거
