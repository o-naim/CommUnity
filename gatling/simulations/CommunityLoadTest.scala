// Gatling performance tests for CommUnity
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class CommunityLoadTest extends Simulation {

  val httpProtocol = http
    .baseUrl("http://localhost:3000")
    .acceptHeader("application/json")
    .userAgentHeader("Gatling Load Test")

  val scn = scenario("CommUnity Load Test")
    .exec(
      http("Homepage")
        .get("/")
        .check(status.is(200))
    )
    .pause(2)
    .exec(
      http("Events List")
        .get("/api/events")
        .check(status.is(200))
        .check(jsonPath("$.events").exists)
    )
    .pause(1)
    .exec(
      http("Search Events")
        .get("/api/events?search=concert")
        .check(status.is(200))
    )
    .pause(2)
    .exec(
      http("Event Details")
        .get("/api/events/1")
        .check(status.is(200))
        .check(jsonPath("$.title").exists)
    )

  setUp(
    scn.inject(
      atOnceUsers(10),
      rampUsers(50) during (30 seconds),
      constantUsersPerSec(20) during (60 seconds)
    )
  ).protocols(httpProtocol)
   .assertions(
     global.responseTime.max.lt(2000),
     global.successfulRequests.percent.gt(95)
   )
}
