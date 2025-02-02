import Image from "next/image";
import AppointmentForm from "@/components/forms/AppointmentForm";
import {getPatient} from "@/lib/actions/patient.actions";
import * as Sentry from "@sentry/nextjs";

const NewAppointment = async ({ params: { userId } }: SearchParamProps) => {
    const patient = await getPatient(userId);

    Sentry.metrics.set("user_view_new-appointment", patient.name);

    return (
        <div className="flex h-screen max-h-screen">
            <section className="remove-scrollbar container my-auto">
                <div className="sub-container max-w-[860px] flex-1 justify-between">
                    <h2 className="text-xl mb-2">HealthPulse</h2>

                    <AppointmentForm
                        type="create"
                        userId={userId}
                        patientId={patient.$id}
                    />

                    <p className="copyright mt-10 py-12">
                        © 2024 HealthPulse
                    </p>
                </div>

            </section>
            <Image
                src="/assets/images/appointment-img.png"
                height={1000}
                width={1000}
                alt="appointment"
                className="side-img max-w-[390px] bg-bottom"
            />
        </div>
    );
}

export default NewAppointment;
