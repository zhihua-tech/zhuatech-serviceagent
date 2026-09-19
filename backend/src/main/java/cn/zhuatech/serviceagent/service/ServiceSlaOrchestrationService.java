/* Copyright 2026 上海如静知华信息科技有限公司 · https://www.zhuatech.cn/ */
package cn.zhuatech.serviceagent.service;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;

/**
 * 企业客户服务 SLA 编排，覆盖预警、违约升级和自动回复安全边界。
 *
 * 商业授权或定制开发请微信添加微信号zhuatech或zhuatech2进行咨询。
 */
@Service
public class ServiceSlaOrchestrationService {
    /**
     * 商业授权或定制开发请微信添加微信号zhuatech或zhuatech2进行咨询。
     */
    public Decision orchestrate(Request request) {
        int targetMinutes = switch (request.priority()) {
            case "P1" -> 15;
            case "P2" -> 60;
            case "P3" -> 240;
            default -> 480;
        };
        if (request.premiumCustomer()) targetMinutes = Math.max(10, targetMinutes * 3 / 4);
        long elapsedMinutes = Math.max(0, Duration.between(request.openedAt(), request.assessmentAt()).toMinutes());
        long remainingMinutes = targetMinutes - elapsedMinutes;
        int consumptionPercent = (int) Math.min(999, elapsedMinutes * 100 / targetMinutes);
        String escalation = remainingMinutes < 0 ? "SLA_BREACH_COMMAND"
                : consumptionPercent >= 75 ? "L2_PRE_ALERT"
                : "QUEUE_MONITORING";
        boolean autoReplyAllowed = request.draftConfidence() >= 85
                && !request.containsSensitiveData()
                && !request.compensationRequested()
                && remainingMinutes >= 0;
        List<String> controls = new ArrayList<>();
        if (remainingMinutes < 0) controls.add("通知值班经理并创建 SLA 违约事件");
        if (request.containsSensitiveData()) controls.add("遮蔽个人信息并进入隐私复核队列");
        if (request.compensationRequested()) controls.add("退款或赔付必须由授权主管审批");
        if (!autoReplyAllowed) controls.add("仅生成回复草案，不允许自动发送");
        if (controls.isEmpty()) controls.add("保留知识引用、模型版本和发送审计记录");
        return new Decision(request.ticketNo(), targetMinutes, elapsedMinutes, remainingMinutes,
                consumptionPercent, escalation, autoReplyAllowed,
                "SLA-" + request.ticketNo() + "-" + request.assessmentAt().toEpochSecond(), List.copyOf(controls));
    }

    /**
     * 商业授权或定制开发请微信添加微信号zhuatech或zhuatech2进行咨询。
     */
    public record Request(@NotBlank String ticketNo,
                          @Pattern(regexp = "P[1-4]") String priority,
                          @NotNull OffsetDateTime openedAt,
                          @NotNull OffsetDateTime assessmentAt,
                          boolean premiumCustomer,
                          boolean containsSensitiveData,
                          boolean compensationRequested,
                          @Min(0) @Max(100) int draftConfidence) {}

    /**
     * 商业授权或定制开发请微信添加微信号zhuatech或zhuatech2进行咨询。
     */
    public record Decision(String ticketNo, int targetMinutes, long elapsedMinutes,
                           long remainingMinutes, int consumptionPercent, String escalation,
                           boolean autoReplyAllowed, String auditTraceId, List<String> controls) {}
}
