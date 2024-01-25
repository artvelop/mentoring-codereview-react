import { FaRegStar, FaStar } from 'react-icons/fa6';
import { IoTicketSharp } from 'react-icons/io5';
import { RiArrowGoBackLine } from 'react-icons/ri';

interface OnClickIconType {
  size?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}
//
export const NotFillStarIcon = ({ size, onClick }: OnClickIconType) => (
  <FaRegStar size={size} onClick={onClick} color="#FB9B00" />
); // 별빈거

export const FillStarIcon = ({ size, onClick }: OnClickIconType) => (
  <FaStar size={size} onClick={onClick} color="#FB9B00" />
); // 별채운거

export const TicketIcon = ({ onClick }: OnClickIconType) => (
  <IoTicketSharp size={'25'} onClick={onClick} color="#FB9B00" />
); // 티켓

export const BackIcon = ({ onClick }: OnClickIconType) => (
  <RiArrowGoBackLine size={'30'} onClick={onClick} color="#FB9B00" />
); // 뒤로가기
