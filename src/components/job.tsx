import { JobInfo } from "../interfaces/JobInfo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

type JobProps = {
    job: JobInfo
}

export const Job = (props: JobProps) => {
    function navigateToComapny(){
        window.open(props.job.CompanyUrl, '_blank')?.focus()
    }
    return (
        <div >
            <div className="flex flex-row">
                <div className="flex w-1/4">
                    <span className="font-thin">{props.job.StartDate} - {props.job.EndDate}</span>
                </div>
                <div className="flex flex-col w-3/4">
                    <span className="font-bold cursor-pointer" onClick={()=>navigateToComapny()}>{props.job.CompanyName} <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></span>
                    <span className="">{props.job.JobTitle}</span>
                    <span className="">{props.job.JobDescription}</span>
                    <span className="">{props.job.Skills.join(" \u2022 ")}</span>
                </div>
            </div>


        </div>
    )
}

export default Job;