data class Event(
    val event_id: Int,
    val user_id: Int?,
    val event_title: String,
    val event_description: String,
    val start_time: String,
    val end_time: String,
    val created_at: String,
)
