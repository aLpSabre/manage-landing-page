import Styling from "../../scss/components/_second-page.module.scss"
const SecondPage = () => {

  return (
    <section className={Styling.container} id="about">
      <div className={Styling.tablet}></div>
      <div className={Styling.wrapper}>

        <div className={Styling.left}>
          <h1>What’s different about Manage?</h1>
          <p>  Manage provides all the functionality your team needs, without
            the complexity. Our software is tailor-made for modern digital
            product teams.</p>
        </div>

        <div className={Styling.right}>
          <div className={Styling.item}>

            <p className={Styling.numbers}>01</p>
            <div>
              <h4>  Track company-wide progress
              </h4>
              <p> See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                smallest of details. Never lose sight of the bigger picture again.</p>
            </div>
          </div>
          <div className={Styling.item}>
            <p className={Styling.numbers}>02</p>
            <div>
              <h4>  Advanced built-in reports
              </h4>
              <p>  Set internal delivery estimates and track progress toward company
                goals. Our customisable dashboard helps you build out the reports
                you need to keep key stakeholders informed.</p>
            </div>
          </div>
          <div className={Styling.item}>
            <p className={Styling.numbers}>03</p>
            <div>
              <h4>Everything you need in one place

              </h4>
              <p>Stop jumping from one service to another to communicate, store files,
                track tasks and share documents. Manage offers an all-in-one team
                productivity solution.</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )


}
export default SecondPage