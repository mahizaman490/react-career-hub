import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
    const { logo,id, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-5 py-2 text-[#7E90FE] font-extrabold border rounded border-[#7E90FE] mr-4">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border text-[#7E90FE] rounded border-[#7E90FE] mr-4">{job_type}</button>
                </div>
                <div className="mt-4 flex mr-4">
                    <h2 className="flex mr-4"><CiLocationOn className="text-2xl mr-2"></CiLocationOn> {location}
                    </h2>
                    <h2 className="flex"><AiOutlineDollarCircle className="text-2xl"></AiOutlineDollarCircle>{salary}</h2>
                </div>
                <div className="card-actions ">

                    <Link to={`/job/${id}`}>
                    <button className="btn bg-gradient-to-r from-indigo-300 from-10% via-sky-300 via-30% to-emerald-300 to-90% ...">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;